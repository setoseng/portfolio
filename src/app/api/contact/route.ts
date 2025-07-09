import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "../../../components/email/ContactEmail";
import { render } from "@react-email/components";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, inquiryType, message, recaptchaToken } =
      await request.json();

    // Verify reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "reCAPTCHA verification required" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA with Google
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      {
        method: "POST",
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // For reCAPTCHA v3, check the score (0.0 is very likely a bot, 1.0 is very likely a human)
    if (recaptchaData.score < 0.5) {
      return NextResponse.json(
        { error: "reCAPTCHA score too low. Please try again." },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Generate email HTML using the ContactEmail component
    const emailHtml = await render(
      React.createElement(ContactEmail, {
        name,
        email,
        inquiryType,
        message,
      })
    );

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <${process.env.FROM_EMAIL || "contact@sseng.dev"}>`,
      to: ["setoseng@gmail.com"],
      subject: `New Contact Form Submission - ${inquiryType}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully!", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
