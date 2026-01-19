# EmailJS Setup Guide for Portfolio Contact Form

## 🚀 How to Set Up EmailJS

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Connect your Gmail account
   - **Outlook**: Connect your Outlook account
   - Or use any other supported service
4. Click **Connect Account** and authorize access
5. **Copy your Service ID** (e.g., `service_abc1234`)

### Step 3: Create Email Template for OTP
1. Go to **Email Templates**
2. Click **Create New Template**
3. Set up the template:
   - **Template Name**: `OTP Verification`
   - **Subject**: `Your OTP Verification Code`
   - **Content** (paste this):
   ```
   Hello,

   Your email verification code is: {{otp_code}}

   This code will expire in 5 minutes.

   If you didn't request this code, please ignore this email.

   Best regards,
   Kandhal Shakil
   ```
4. **Important**: Use these variable names in your template:
   - `{{to_email}}` - Recipient's email
   - `{{otp_code}}` - The 6-digit OTP
   - `{{message}}` - Optional message
5. **Copy your Template ID** (e.g., `template_xyz5678`)

### Step 4: Get Your Public Key
1. Go to **Account** > **General**
2. Find **Public Key** section
3. **Copy your Public Key** (e.g., `HiT1qgF3NG4BIwyQY`)

### Step 5: Update Contact.jsx
Open `src/components/Contact.jsx` and replace these values on **line 92-97**:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID
  {
    to_email: email,
    otp_code: otpCode,
    message: `Your OTP verification code is: ${otpCode}. This code will expire in 5 minutes.`
  },
  'YOUR_PUBLIC_KEY'       // Replace with your Public Key
);
```

**Example with actual values:**
```javascript
await emailjs.send(
  'service_emks25r',      
  'template_h8r9vlo',     
  {
    to_email: email,
    otp_code: otpCode,
    message: `Your OTP verification code is: ${otpCode}. This code will expire in 5 minutes.`
  },
  'HiT1qgF3NG4BIwyQY'    
);
```

### Step 6: Test Your Setup
1. Run your portfolio: `npm start`
2. Go to the Contact section
3. Fill in the form with your email
4. Click "Send Message"
5. Check your email for the OTP code
6. Enter the OTP and verify

## 📧 EmailJS Template Variables

Make sure your EmailJS template includes these variables:

| Variable | Description |
|----------|-------------|
| `{{to_email}}` | Recipient's email address |
| `{{otp_code}}` | The 6-digit OTP code |
| `{{message}}` | Custom message content |

## 🔒 Security Notes

1. **Never commit your EmailJS keys to public repositories**
2. Consider using environment variables:
   ```javascript
   const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
   const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
   const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
   ```
3. Create `.env` file in root:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 📊 EmailJS Free Tier Limits

- **200 emails/month** (Free)
- Upgrade for more emails if needed
- No credit card required for free tier

## ✅ Testing Checklist

- [ ] EmailJS account created
- [ ] Email service connected
- [ ] OTP template created with correct variables
- [ ] Service ID, Template ID, and Public Key copied
- [ ] Keys updated in Contact.jsx
- [ ] Test email sent successfully
- [ ] OTP received and verified
- [ ] Form submission working

## 🆘 Troubleshooting

**OTP not received?**
- Check spam folder
- Verify template variables are correct (`{{otp_code}}`, `{{to_email}}`)
- Check EmailJS dashboard for error logs
- Ensure email service is properly connected

**"Failed to send OTP" error?**
- Verify your Service ID, Template ID, and Public Key
- Check browser console for detailed error messages
- Ensure you haven't exceeded free tier limits
- Try disconnecting and reconnecting email service

**OTP verification failing?**
- Check if entered OTP matches generated OTP
- Ensure OTP hasn't expired (5 minutes)
- Clear browser cache and try again

## 📞 Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

**Your current setup location:**
File: `src/components/Contact.jsx`
Lines to update: **92-97** (EmailJS send function)
