import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

const API_URL  = process.env.API_URL  || 'https://sidecarleads.com'
const SITE_URL = process.env.SITE_URL || 'https://agentjoust.com'

export async function POST(request) {
  try {
    const body = await request.json()

    // Generate a unique joust token for this consumer's personal room
    const token = uuidv4()

    const payload = {
      lead_source:     'agentjoust-joust',
      form_type:       'joust_request',
      joust_token:     token,
      first_name:      body.firstName     || '',
      last_name:       body.lastName      || '',
      email:           body.email         || '',
      phone:           body.phone         || '',
      dob:             body.dob           || '',
      gender:          body.gender        || '',
      policy_type:     body.policyType    || '',
      coverage_amount: body.coverageAmount|| '',
      term_length:     body.termLength    || '',
      tobacco_use:     body.tobacco       || '',
      health_class:    body.health        || '',
      medications:     body.medications   || '',
    }

    // 1. Submit lead to SidecarLeads
    await fetch(`${API_URL}/leads/web`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload),
    })

    // 2. Send magic link email (if Resend key is configured)
    if (body.email && process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      const joustUrl = `${SITE_URL}/joust/${token}`

      await resend.emails.send({
        from:    process.env.RESEND_FROM || 'AgentJoust <noreply@agentjoust.com>',
        to:      body.email,
        subject: '⚔ Your joust is live — agents are competing',
        html: `
          <!DOCTYPE html>
          <html>
          <body style="font-family:'Inter',sans-serif;background:#f5f1e8;margin:0;padding:40px 20px;">
            <div style="max-width:520px;margin:0 auto;">
              <div style="font-family:'Georgia',serif;font-size:24px;font-weight:600;margin-bottom:8px;color:#14110d;">
                Agent<span style="font-style:italic;color:#c8281c;">Joust</span>
              </div>
              <h1 style="font-family:'Georgia',serif;font-size:32px;font-weight:400;color:#14110d;margin:24px 0 16px;line-height:1.2;">
                Your joust is <em>live.</em>
              </h1>
              <p style="font-size:16px;color:#6b6253;line-height:1.65;margin-bottom:32px;">
                Hi ${body.firstName || 'there'} — three agents have been briefed on your coverage needs.
                They're building your proposals now. Come back to check progress anytime using the link below.
              </p>
              <a href="${joustUrl}"
                 style="display:inline-block;background:#2d5a3d;color:#fff;padding:16px 36px;
                        border-radius:100px;font-size:16px;font-weight:600;text-decoration:none;">
                View your joust room →
              </a>
              <p style="font-size:12px;color:#6b6253;margin-top:32px;line-height:1.6;">
                Your contact info is sealed until you choose your winner.<br/>
                Bookmark this link: <a href="${joustUrl}" style="color:#2d5a3d;">${joustUrl}</a>
              </p>
              <hr style="border:none;border-top:1px solid rgba(20,17,13,.1);margin:32px 0;" />
              <p style="font-size:11px;color:#6b6253;">
                AgentJoust · Not affiliated with any carrier ·
                <a href="${SITE_URL}/privacy" style="color:#6b6253;">Privacy</a>
              </p>
            </div>
          </body>
          </html>
        `,
      })
    }

    return NextResponse.json({ token }, { status: 200 })

  } catch (err) {
    console.error('Submit error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
