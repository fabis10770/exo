import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env manually for standalone script
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8');
  envFile.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      process.env[match[1]] = match[2].trim();
    }
  });
}

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Error: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const admins = [
  { username: 'farhaan', password: '629332' },
  { username: 'fabis', password: '217075' }
];

async function seed() {
  console.log('Seeding admins to Supabase...');
  
  for (const admin of admins) {
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(admin.password, salt);
    
    // Check if exists
    const { data: existing } = await supabase
      .from('admins')
      .select('username')
      .eq('username', admin.username)
      .single();
      
    if (existing) {
      console.log(`Admin ${admin.username} already exists. Updating password...`);
      const { error } = await supabase
        .from('admins')
        .update({ password_hash: passwordHash })
        .eq('username', admin.username);
        
      if (error) console.error(`Error updating ${admin.username}:`, error);
      else console.log(`Updated ${admin.username}.`);
    } else {
      console.log(`Creating admin ${admin.username}...`);
      const { error } = await supabase
        .from('admins')
        .insert({
          username: admin.username,
          password_hash: passwordHash
        });
        
      if (error) console.error(`Error creating ${admin.username}:`, error);
      else console.log(`Created ${admin.username}.`);
    }
  }
  
  console.log('Seed complete.');
}

seed().catch(console.error);
