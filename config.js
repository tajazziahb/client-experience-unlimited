import {createClient} from "@supabase/supabase-js";

// Create a single supabase Client for interacting with your database
const supabaseUrl = 'https://nknqopoeoiqukqkqmbzg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rbnFvcG9lb2lxdWtxa3FtYnpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2MjQxNDAsImV4cCI6MjA0NDIwMDE0MH0.aiR-FKC3ZxKSInmKZiSfQCMZA2Tzg-tkYPVnDRbhzuQ'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;