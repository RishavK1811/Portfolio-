# Email Configuration Setup

To enable email functionality for your contact form, follow these steps:

## Step 1: Create EmailJS Account
1. Visit https://www.emailjs.com/
2. Sign up for a free account
3. Complete email verification

## Step 2: Add Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add Service"
3. Select your email provider (Gmail, Outlook, etc.)
4. Follow the setup wizard
5. Copy your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Name it something like "Portfolio Contact"
4. Configure the template with these variables:
   - `{{from_name}}` - Visitor's name
   - `{{from_email}}` - Visitor's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message body
5. Set the "To Email" field to: `{{to_email}}`
6. Copy your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Copy your **Public Key** from the API section

## Step 5: Update Configuration
Open `js/script.js` and replace:
- `YOUR_PUBLIC_KEY` - with your Public Key
- `YOUR_SERVICE_ID` - with your Service ID
- `YOUR_TEMPLATE_ID` - with your Template ID

Example:
```javascript
emailjs.init('pk_1234567890abcdef');
emailjs.send('service_1234567890', 'template_1234567890', templateParams)
```

## Done!
Your contact form will now send emails to rishavkumar181101@gmail.com when someone submits it.
