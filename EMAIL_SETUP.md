# Email Setup Guide

This portfolio uses **Resend** for sending contact form emails. Follow these steps to set up email functionality:

## 1. Get a Resend API Key

1. Go to [Resend.com](https://resend.com) and create an account
2. Navigate to the API Keys section
3. Create a new API key
4. Copy the API key (it starts with `re_`)

## 2. Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace `your_resend_api_key_here` with your actual Resend API key:

```env
RESEND_API_KEY=re_your_actual_api_key_here
FROM_EMAIL=contact@setya.dev
```

## 3. Verify Your Domain (Optional but Recommended)

For better deliverability, verify your domain in Resend:

1. In your Resend dashboard, go to Domains
2. Add your domain (e.g., `setya.dev`)
3. Follow the DNS verification steps
4. Update the `FROM_EMAIL` in `.env.local` to use your verified domain

## 4. Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the contact form
4. Check your email (setoseng@gmail.com) for the received message

## 5. Production Deployment

When deploying to production:

1. Add the environment variables to your hosting platform:
   - Vercel: Add in Project Settings → Environment Variables
   - Netlify: Add in Site Settings → Environment Variables
   - Other platforms: Follow their specific instructions

2. Make sure your domain is verified in Resend for production use

## Features

- ✅ **Form Validation**: Client-side and server-side validation
- ✅ **Loading States**: Visual feedback during submission
- ✅ **Error Handling**: Proper error messages for users
- ✅ **Success Feedback**: Confirmation when email is sent
- ✅ **Professional Email Template**: Clean, branded email design
- ✅ **Mobile Responsive**: Works on all devices

## Troubleshooting

### Email Not Sending

- Check that your Resend API key is correct
- Verify the API key has proper permissions
- Check the browser console and server logs for errors

### Domain Verification Issues

- Ensure DNS records are properly configured
- Wait for DNS propagation (can take up to 24 hours)
- Contact Resend support if issues persist

### Rate Limiting

- Resend has rate limits (100 emails/day on free plan)
- Upgrade your plan if you need higher limits

## Security Notes

- Never commit your API key to version control
- Use environment variables for all sensitive data
- The contact form includes basic spam protection
- Consider adding reCAPTCHA for additional protection

## Customization

You can customize the email template by editing the HTML in `src/app/api/contact/route.ts`. The template includes:

- Your brand colors (#0551FA)
- Professional styling
- Contact details section
- Message content
- Timestamp and footer
