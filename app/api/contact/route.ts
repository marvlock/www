import { NextResponse } from "next/server"

const INBOX = "marvlock.dev@gmail.com"

type ContactPayload = {
  firstName?: string
  lastName?: string
  email?: string
  description?: string
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    }
    return entities[character]
  })
}

function contactEmailHtml({
  firstName,
  lastName,
  email,
  description,
}: Required<ContactPayload>) {
  const name = `${firstName} ${lastName}`

  return `
    <!doctype html>
    <html lang="en">
      <body style="margin:0;padding:0;background-color:#f3f2ed;color:#101412;font-family:Arial,sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f3f2ed;padding:32px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background-color:#0a0d0c;">
                <tr>
                  <td style="height:6px;background-color:#4a9b6e;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
                <tr>
                  <td style="padding:32px 36px 28px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td valign="middle">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td align="center" valign="middle" style="width:42px;height:42px;background-color:#4a9b6e;color:#0a0d0c;font-family:monospace;font-size:24px;font-weight:700;line-height:42px;">M</td>
                              <td style="padding-left:12px;color:#f5f3ed;font-family:monospace;font-size:14px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Marvlock</td>
                            </tr>
                          </table>
                        </td>
                        <td align="right" valign="middle" style="color:#84bf9b;font-family:monospace;font-size:11px;letter-spacing:1px;text-transform:uppercase;">New inquiry</td>
                      </tr>
                    </table>
                    <div style="height:1px;background-color:#314038;margin:28px 0 24px;">&nbsp;</div>
                    <p style="margin:0 0 8px;color:#84bf9b;font-family:monospace;font-size:12px;letter-spacing:1px;text-transform:uppercase;">Inbound / website contact</p>
                    <h1 style="margin:0;color:#f5f3ed;font-family:Arial,sans-serif;font-size:32px;line-height:1.15;font-weight:700;">A new project is on the radar.</h1>
                    <p style="margin:16px 0 0;color:#bac0ba;font-family:Arial,sans-serif;font-size:16px;line-height:1.6;">${escapeHtml(name)} wants to start a conversation with Marvlock.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 36px 32px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #314038;background-color:#101714;">
                      <tr>
                        <td style="padding:22px 24px 12px;color:#84bf9b;font-family:monospace;font-size:11px;letter-spacing:1px;text-transform:uppercase;">Contact</td>
                      </tr>
                      <tr>
                        <td style="padding:0 24px 22px;">
                          <p style="margin:0 0 5px;color:#f5f3ed;font-family:Arial,sans-serif;font-size:18px;font-weight:700;">${escapeHtml(name)}</p>
                          <a href="mailto:${escapeHtml(email)}" style="color:#84bf9b;font-family:Arial,sans-serif;font-size:15px;text-decoration:none;">${escapeHtml(email)}</a>
                        </td>
                      </tr>
                    </table>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:16px;border:1px solid #314038;background-color:#101714;">
                      <tr>
                        <td style="padding:22px 24px 12px;color:#84bf9b;font-family:monospace;font-size:11px;letter-spacing:1px;text-transform:uppercase;">Project brief</td>
                      </tr>
                      <tr>
                        <td style="padding:0 24px 24px;color:#e1e4df;font-family:Arial,sans-serif;font-size:16px;line-height:1.65;white-space:pre-wrap;">${escapeHtml(description)}</td>
                      </tr>
                    </table>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:24px;">
                      <tr>
                        <td style="background-color:#c97a3d;">
                          <a href="mailto:${escapeHtml(email)}" style="display:inline-block;padding:13px 18px;color:#0a0d0c;font-family:monospace;font-size:12px;font-weight:700;letter-spacing:1px;text-decoration:none;text-transform:uppercase;">Reply to ${escapeHtml(firstName)}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 36px;background-color:#080a09;color:#718078;font-family:Arial,sans-serif;font-size:12px;line-height:1.5;">Sent from the Marvlock website contact form.</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL

  if (!apiKey || !from) {
    return NextResponse.json(
      { error: "Email delivery is not configured yet." },
      { status: 503 },
    )
  }

  let payload: ContactPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 })
  }

  const firstName = payload.firstName?.trim()
  const lastName = payload.lastName?.trim()
  const email = payload.email?.trim()
  const description = payload.description?.trim()

  if (!firstName || !lastName || !email || !description) {
    return NextResponse.json({ error: "Please complete every field." }, { status: 400 })
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [INBOX],
      reply_to: email,
      subject: `New project inquiry from ${firstName} ${lastName}`,
      html: contactEmailHtml({ firstName, lastName, email, description }),
      text: [
        "New inquiry from the Marvlock website",
        "",
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        "",
        "Project details:",
        description,
      ].join("\n"),
    }),
  })
  const responseData = await response.json().catch(() => null)

  if (!response.ok) {
    console.error("Resend contact email failed", {
      status: response.status,
      errorDetails: responseData,
    })

    return NextResponse.json(
      { error: "We could not send your message. Please try again shortly." },
      { status: 502 },
    )
  }

  console.info("Resend contact email accepted", { id: responseData?.id })

  return NextResponse.json({ ok: true })
}
