import { createClient as supabaseCreateClient } from '@supabase/supabase-js'

type SupabaseClient = ReturnType<typeof supabaseCreateClient>

function makeProxy(factory: () => SupabaseClient): SupabaseClient {
  let _client: SupabaseClient | null = null
  const getClient = () => {
    if (!_client) _client = factory()
    return _client
  }
  return new Proxy({} as SupabaseClient, {
    get(_target, prop) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (getClient() as any)[prop]
    },
  })
}

export const supabase = makeProxy(() => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  return supabaseCreateClient(url, key)
})

// Server-only admin client — lazy proxy, never import in client components
export const supabaseAdmin = makeProxy(() => {
  if (typeof window !== 'undefined') {
    throw new Error('supabaseAdmin must only be used on the server side')
  }
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!
  return supabaseCreateClient(url, key)
})
