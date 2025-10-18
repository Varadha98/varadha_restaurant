

 import * as dotenv from 'dotenv';
 dotenv.config({ path: '.env.local' });
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase credentials');
}

const supabase = createClient(supabaseUrl, supabaseKey);

(async () => {
  console.log("✅ Connected to Supabase!");

  // Simple test: insert dummy user
  const { error } = await supabase.from('users').insert([{ username: 'admin', password: '1234' }]);
  if (error) console.error("❌ Insert failed:", error);
  else console.log("✅ User inserted successfully!");
})();
