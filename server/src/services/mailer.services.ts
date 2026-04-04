import nodemailer, { Transporter } from 'nodemailer';
import { mailConfig } from '../config/mail.js';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

class MailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport(mailConfig);
  }

  async sendEmail(options: EmailOptions): Promise<void> {
    try {
      const info = await this.transporter.sendMail({
        from: `"ANANDPANDEY" <${process.env.EMAIL_USER}>`,
        ...options,
      });
      console.log(`Email sent: ${info.messageId}`);
    } catch (error) {
      console.error('Mail Error:', error);
      throw new Error('Failed to send email');
    }
  }
}

export const mailService = new MailService();
