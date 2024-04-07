import { createClient } from '@supabase/supabase-js'

// Read the url and anon key from dev
const superbaseUrl = import.meta.env.VITE_SUPABASE_URL;
const superbaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

//creat a superbase client instance from use in the application
export const supabase = createClient(superbaseUrl, superbaseAnonKey);