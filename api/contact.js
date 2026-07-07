/**
 * api/contact.js — Vercel serverless function for the contact form.
 *
 * Phase 1: Stub — logs the submission to console.
 * Phase 2: Replace the TODO block with a real email provider
 *          (Resend, Nodemailer + SMTP, Formspree, etc.)
 *
 * Method: POST
 * Body:   { name, email, subject?, message }
 */

export default async function handler(req, res) {
  // Only accept POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, subject = '(no subject)', message } = req.body ?? {}

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are required.' })
  }

  // ── TODO: Replace this block with a real email provider ──────────────────
  //
  // Example using Resend:
  //
  //   import { Resend } from 'resend'
  //   const resend = new Resend(process.env.RESEND_API_KEY)
  //   await resend.emails.send({
  //     from: 'Portfolio Contact <noreply@yourdomain.com>',
  //     to: process.env.CONTACT_EMAIL,
  //     subject: `[Portfolio] ${subject} — from ${name}`,
  //     text: `From: ${name} <${email}>\n\n${message}`,
  //   })
  //
  // ─────────────────────────────────────────────────────────────────────────

  // Phase 1 stub: just log the submission
  console.log('[contact] New submission:', { name, email, subject, message })

  return res.status(200).json({ ok: true, message: 'Message received.' })
}
