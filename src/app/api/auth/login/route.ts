import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const db = supabaseAdmin as any
    const { data: brand, error } = await db
      .from('brands')
      .select('*')
      .eq('contact_email', email)
      .single()

    if (error || !brand) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Verify password using base64 demo hash — NOT for production use
    const passwordHash = Buffer.from(password).toString('base64')
    if (brand.password_hash !== passwordHash) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const response = NextResponse.json({
      success: true,
      brand: {
        id: brand.id,
        brandName: brand.brand_name,
        contactName: brand.contact_name,
        email: brand.contact_email,
        website: brand.website,
      },
    })

    response.cookies.set('live31_session', brand.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
