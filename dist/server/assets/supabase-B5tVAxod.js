import { createClient } from "@supabase/supabase-js";
var supabase = createClient("https://your-project.supabase.co", "your-anon-key");
//#endregion
export { supabase as t };
