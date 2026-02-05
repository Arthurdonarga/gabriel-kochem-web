import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; lastTime: number }>();

export async function POST(req: Request) {
    try {
        const { name, phone, email, message, company } = await req.json();

        // 1. Honeypot Check (Anti-Bot)
        // If the hidden 'company' field is filled, it's a bot.
        // Return success silently so the bot thinks it worked, but DON'T send email.
        if (company) {
            return NextResponse.json({ success: true, message: 'Email enviado com sucesso!' });
        }

        // 2. Rate Limiting (Anti-Spam)
        const ip = req.headers.get('x-forwarded-for') || 'unknown-ip';
        const now = Date.now();
        const windowTime = 60 * 60 * 1000; // 1 hour
        const maxRequests = 3;

        const record = rateLimit.get(ip);

        if (record) {
            if (now - record.lastTime < windowTime) {
                if (record.count >= maxRequests) {
                    return NextResponse.json(
                        { error: 'Muitas tentativas. Tente novamente em uma hora.' },
                        { status: 429 }
                    );
                }
                rateLimit.set(ip, { count: record.count + 1, lastTime: record.lastTime });
            } else {
                // Reset after window passes
                rateLimit.set(ip, { count: 1, lastTime: now });
            }
        } else {
            rateLimit.set(ip, { count: 1, lastTime: now });
        }

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Nome, email e mensagem são obrigatórios.' },
                { status: 400 }
            );
        }

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS, // App Password
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER, // Send to yourself
            replyTo: email, // Allow replying directly to the user
            subject: `Novo contato pelo site: ${name}`,
            text: `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone || 'Não informado'}
        
        Mensagem:
        ${message}
      `,
            html: `
        <h3>Novo contato recebido pelo site</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
        <br/>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return NextResponse.json(
            { error: 'Falha ao enviar email. Tente novamente mais tarde.' },
            { status: 500 }
        );
    }
}
