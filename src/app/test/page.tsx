// src/app/test/page.tsx
import { supabase } from '@/lib/supabaseClient'

export default async function TestPage() {
  // Example: fetch all rows from a "restaurants" table
  const { data, error } = await supabase.from('restaurants').select('*')

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h1>Test Page</h1>
      <pre>{JSON.stringify(data, null, 1)}</pre>
    </div>
  )
}
