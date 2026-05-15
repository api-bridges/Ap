import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const { brandName, contactName, email, password, website } = await request.json()

    if (!brandName || !contactName || !email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const db = supabaseAdmin as any

    const { data: existing } = await db
      .from('brands')
      .select('id')
      .eq('contact_email', email)
      .single()

    if (existing) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 409 })
    }

    // Hash password with bcrypt (12 rounds)
    const passwordHash = await bcrypt.hash(password, 12)

    const id = uuidv4()
    const { data: brand, error } = await db
      .from('brands')
      .insert({
        id,
        brand_name: brandName,
        contact_name: contactName,
        contact_email: email,
        password_hash: passwordHash,
        website: website || null,
        status: 'active',
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: 'Registration failed' }, { status: 500 })
    }

    const response = NextResponse.json({
      success: true,
      brand: { id: brand.id, brandName: brand.brand_name, email: brand.contact_email },
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
