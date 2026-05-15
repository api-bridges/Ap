import { createClient as supabaseCreateClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = supabaseCreateClient(supabaseUrl, supabaseAnonKey)

// Server-only admin client — never import this in client components
function createServerAdminClient() {
  if (typeof window !== 'undefined') {
    throw new Error('supabaseAdmin must only be used on the server side')
  }
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  return supabaseCreateClient(supabaseUrl, supabaseServiceKey)
}

export const supabaseAdmin = createServerAdminClient()
