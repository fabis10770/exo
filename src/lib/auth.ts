import bcrypt from 'bcryptjs';
import { supabase } from './supabase';

const SESSION_KEY = 'exoclust_admin_session';

export async function login(username: string, passwordPlain: string) {
  // Fetch admin by username
  const { data, error } = await supabase
    .from('admins')
    .select('*')
    .eq('username', username)
    .single();

  if (error || !data) {
    throw new Error('Invalid username or password');
  }

  // Compare hashed password
  const isValid = await bcrypt.compare(passwordPlain, data.password_hash);
  
  if (!isValid) {
    throw new Error('Invalid username or password');
  }

  // Set session
  const sessionData = {
    username: data.username,
    loggedInAt: Date.now(),
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
  
  return sessionData;
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

export function getSession() {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(SESSION_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch (e) {
    return null;
  }
}
