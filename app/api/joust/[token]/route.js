import { NextResponse } from 'next/server'

const API_URL = process.env.API_URL || 'https://sidecarleads.com'

export async function GET(request, { params }) {
  const { token } = params

  try {
    // Fetch proposals from SidecarLeads for this joust token
    const res = await fetch(`${API_URL}/jousts/${token}/proposals`, {
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    })

    if (!res.ok) {
      // Token not found or API not ready — return empty proposals
      return NextResponse.json({ token, proposals: [], status: 'pending' })
    }

    const data = await res.json()
    return NextResponse.json(data)

  } catch {
    return NextResponse.json({ token, proposals: [], status: 'pending' })
  }
}

// Consumer crowns a winner
export async function POST(request, { params }) {
  const { token } = params
  const body = await request.json()

  try {
    const res = await fetch(`${API_URL}/jousts/${token}/winner`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ winner_agent_id: body.agentId }),
    })

    const data = await res.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Failed to record winner' }, { status: 500 })
  }
}
