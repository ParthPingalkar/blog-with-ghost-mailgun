# Build your Personal Blog with Ghost CMS & Mailgun
A step-by-step guide for setting up a **Ghost CMS** personal blogging website with **Mailgun** integration, hosted on **AWS Lightsail**. This repository contains the instructions, configuration files, and scripts to get your blog up and running.

## 📋 **Table of Contents**
- [Project Overview](#project-overview)
- [Features](#features)
- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
- [Mailgun Integration](#mailgun-integration)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Project Overview 
This project demonstrates how to deploy a fully functional **Ghost CMS** blog on **AWS Lightsail** and integrate **Mailgun** for email notifications (e.g., newsletter subscription confirmation). Ghost CMS provides a modern publishing platform, while Mailgun ensures reliable email service.

---

## Features 
- **Ghost CMS Setup**: Deploy and configure Ghost on AWS Lightsail.
- **Mailgun Integration**: Set up Mailgun to send confirmation and notification emails.
- **Customizable**: Easily change themes and settings for your personalized blog.
- **Secure**: Uses AWS best practices for security and reliability.

---

## Requirements 
- An **AWS** account for setting up **Lightsail** (or any other cloud provider)
- **Git** to clone the repository
- A **Mailgun** account for email configuration

---

## Setup Instructions

### Step 1: Clone the repository 

First, clone this repository to your local machine or directly onto your server.
```bash
git clone https://github.com/<your-username>/custom-aws-ghost-blogging-with-mailgun.git
cd custom-aws-ghost-blogging-with-mailgun
Step 2: Set Up Ghost CMS on AWS Lightsail
Create a Lightsail instance:

Go to the Lightsail dashboard, choose a Ghost CMS image, and create an instance.
Follow the instance creation wizard to get your instance up and running.
Connect via SSH:

Use the browser-based SSH or your SSH client to access your Lightsail instance.
Run the following commands to install and configure Ghost CMS:

sudo apt-get update
sudo apt-get install -y nodejs npm
sudo npm install ghost-cli@latest -g
sudo ghost install
This will install Ghost CMS and all dependencies.

Step 3: Configure Ghost for Your Blog
After installation, access the Ghost CMS setup by navigating to:

http://<your-ip-address>:2368
in your browser.

Follow the prompts to complete your admin account setup and configure your blog.

📧 Mailgun Integration
Mailgun provides a robust API for sending and receiving emails. Here's how to configure Mailgun for your Ghost CMS setup:

1. Sign Up for Mailgun:
Head over to Mailgun and create an account.
2. Add Your Domain:
In the Mailgun dashboard, add your domain and obtain the API Key.
3. Update Ghost Configuration:
Open the config.production.json file in your Ghost installation directory.
Update the mail settings to include your Mailgun credentials:
"mail": {
  "transport": "SMTP",
  "options": {
    "service": "Mailgun",
    "auth": {
      "user": "postmaster@your-domain.com",
      "pass": "your-mailgun-api-key"
    }
  }
}
4. Test the Email Configuration:
Restart Ghost and check if emails are being sent:
ghost restart
You can test by subscribing to the blog or sending a test email.
⚡ Deployment & Scaling
With AWS Lightsail, you have a reliable and affordable solution for hosting Ghost CMS. Here are some tips for scaling and deployment:

Backup Your Blog: Regularly back up your Ghost blog content using Ghost's backup commands.
Scaling: If your blog grows and you need more resources, resize your Lightsail instance or set up additional instances for better performance.
HTTPS Setup: For security, set up SSL certificates with Let's Encrypt on your instance:
ghost setup ssl
🛠️ Troubleshooting
Issue: Ghost CMS not starting
Solution: Check the logs:

ghost log
Issue: Email not working
Solution: Verify Mailgun credentials and SMTP configuration.

