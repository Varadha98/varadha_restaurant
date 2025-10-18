// import 'dotenv/config';
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// if (!supabaseUrl || !serviceRoleKey) {
//   console.error('❌ Missing environment variables');
//   process.exit(1);
// }

// const supabase = createClient(supabaseUrl, serviceRoleKey);

// async function testConnection() {
//   console.log('🔗 Testing Supabase connection...');

//   try {
//     // Try to list existing tables or fetch from a known table
//     const { data, error } = await supabase.from('pg_tables').select('*').limit(1);

//     if (error) throw error;
//     console.log('✅ Connected to Supabase successfully!');
//   } catch (err) {
//     console.error('❌ Connection failed:');
//   }
// }

// testConnection();


import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' }); // 👈 Force load manually

import { createClient } from '@supabase/supabase-js';





console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const checkConnection = async () => {
  const { data, error } = await supabase.from('test_table').select('*').limit(1);
  if (error) {
    console.error('❌ Connection failed:', error.message);
  } else {
    console.log('✅ Connected! Sample data:', data);
  }
};

checkConnection();

