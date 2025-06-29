# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email sending functionality in your e-commerce website.

## Step 1: Sign Up for EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create Email Templates

### Contact Form Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template for contact form emails:

```html
Subject: New Contact Form Submission from {{firstName}} {{lastName}}

Hello,

You have received a new contact form submission:

Name: {{firstName}} {{lastName}}
Email: {{email}}
Phone: {{phone}}
Subject: {{subject}}
Message: {{message}}

Best regards,
Your Website
```

4. Save the template and note down the **Template ID**

### Newsletter Subscription Template
1. Create another template for newsletter subscriptions:

```html
Subject: Welcome to Our Newsletter!

Hello {{to_name}},

Thank you for subscribing to our newsletter! You'll now receive updates about:
- New products and deals
- Special offers and promotions
- Latest news and updates

If you didn't sign up for this, please ignore this email.

Best regards,
Your Team
```

2. Save this template and note down its **Template ID**

## Step 4: Get Your Public Key

1. In your EmailJS dashboard, go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Your Code

Replace the placeholder values in your code with your actual EmailJS credentials:

### In `src/pages/Contact.jsx`:
```javascript
emailjs.sendForm(
  'YOUR_SERVICE_ID', // Replace with your actual Service ID
  'YOUR_TEMPLATE_ID', // Replace with your Contact Form Template ID
  form.current,
  'YOUR_PUBLIC_KEY' // Replace with your actual Public Key
)
```

### In `src/components/Newsletter.jsx`:
```javascript
emailjs.send(
  'YOUR_SERVICE_ID', // Replace with your actual Service ID
  'YOUR_NEWSLETTER_TEMPLATE_ID', // Replace with your Newsletter Template ID
  templateParams,
  'YOUR_PUBLIC_KEY' // Replace with your actual Public Key
)
```

## Step 6: Test Your Setup

1. Start your React app: `npm start`
2. Go to the Contact page and submit a test form
3. Check your email to see if the message was received
4. Test the newsletter subscription in the Footer or Deals page

## Troubleshooting

### Common Issues:

1. **"Service not found" error**: Make sure your Service ID is correct
2. **"Template not found" error**: Verify your Template ID is correct
3. **"Public key not found" error**: Check your Public Key
4. **Emails not sending**: Ensure your email service is properly configured

### Security Notes:

- Never commit your EmailJS credentials to version control
- Consider using environment variables for production:
  ```javascript
  process.env.REACT_APP_EMAILJS_SERVICE_ID
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  ```

## Free Tier Limitations

EmailJS free tier includes:
- 200 emails per month
- Basic templates
- Standard support

For more emails or advanced features, consider upgrading to a paid plan.

## Alternative Email Services

If you prefer other email services, you can also use:
- SendGrid
- Mailgun
- AWS SES
- Nodemailer (with a backend)

These would require backend implementation, while EmailJS works entirely on the frontend. 