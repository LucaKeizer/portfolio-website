import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, message, viewMode } = body
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Determine email subject based on mode and form data
    const isFreelance = viewMode === 'freelance'
    const defaultSubject = isFreelance 
      ? 'New Project Inquiry from Website'
      : 'New Professional Inquiry from Website'
    
    const subject = body.subject || defaultSubject

    // Create email content
    const emailHtml = generateEmailHtml(body, isFreelance)
    const emailText = generateEmailText(body, isFreelance)

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <noreply@resend.dev>', // Use your verified domain when available
      to: ['keizerluca@gmail.com'],
      subject: subject,
      html: emailHtml,
      text: emailText,
      replyTo: email, // This allows you to reply directly to the sender
    })

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        emailId: data.data?.id || 'sent'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again or contact directly.' },
      { status: 500 }
    )
  }
}

function generateEmailHtml(formData: any, isFreelance: boolean): string {
  const {
    name,
    email,
    company,
    message,
    projectType,
    budget,
    timeline,
    preferredContact
  } = formData

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0ea5e9; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; }
        .message-box { background: white; padding: 15px; border-left: 4px solid #0ea5e9; margin: 15px 0; }
        .footer { padding: 15px; text-align: center; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New ${isFreelance ? 'Project' : 'Professional'} Inquiry</h1>
          <p>From lucakeizer.nl portfolio website</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${name}</div>
          </div>
          
          <div class="field">
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${email}">${email}</a></div>
          </div>
          
          ${company ? `
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${company}</div>
          </div>
          ` : ''}
          
          ${projectType ? `
          <div class="field">
            <div class="label">Project Type:</div>
            <div class="value">${projectType}</div>
          </div>
          ` : ''}
          
          ${budget ? `
          <div class="field">
            <div class="label">Budget:</div>
            <div class="value">${budget}</div>
          </div>
          ` : ''}
          
          ${timeline ? `
          <div class="field">
            <div class="label">Timeline:</div>
            <div class="value">${timeline}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="label">Preferred Contact:</div>
            <div class="value">${preferredContact}</div>
          </div>
          
          <div class="message-box">
            <div class="label">Message:</div>
            <div class="value">${message.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This email was sent from your portfolio website contact form.</p>
          <p>You can reply directly to this email to respond to ${name}.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

function generateEmailText(formData: any, isFreelance: boolean): string {
  const {
    name,
    email,
    company,
    message,
    projectType,
    budget,
    timeline,
    preferredContact
  } = formData

  let text = `New ${isFreelance ? 'Project' : 'Professional'} Inquiry from lucakeizer.nl\n\n`
  text += `Name: ${name}\n`
  text += `Email: ${email}\n`
  
  if (company) text += `Company: ${company}\n`
  if (projectType) text += `Project Type: ${projectType}\n`
  if (budget) text += `Budget: ${budget}\n`
  if (timeline) text += `Timeline: ${timeline}\n`
  
  text += `Preferred Contact: ${preferredContact}\n\n`
  text += `Message:\n${message}\n\n`
  text += `---\n`
  text += `This email was sent from your portfolio website contact form.\n`
  text += `You can reply directly to this email to respond to ${name}.`

  return text
}