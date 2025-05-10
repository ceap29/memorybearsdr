# Deployment Guide for Memory Bears DR

This guide will walk you through the steps to deploy your Memory Bears DR website to Vercel and connect it with your GoDaddy domain.

## Prerequisites

- A GitHub account with your project repository
- A Vercel account (you can sign up for free at [vercel.com](https://vercel.com))
- Your GoDaddy domain (already purchased)

## Step 1: Deploy to Vercel

1. Log in to your [Vercel account](https://vercel.com).
2. Click on "Add New..." > "Project" button.
3. Import your GitHub repository with the Memory Bears DR code.
4. Configure your project with the following settings:
   - **Framework Preset**: Next.js
   - **Build Command**: Leave as default (`npm run build` or `next build`)
   - **Output Directory**: Leave as default (`.next`)
   - **Environment Variables**: Add any required environment variables (if applicable).
5. Click "Deploy".
6. Wait for the deployment to complete. You'll get a Vercel URL like `memory-bears-dr.vercel.app`.

## Step 2: Configure Your GoDaddy Domain

### Add Your Domain to Vercel

1. In your Vercel project dashboard, go to "Settings" > "Domains".
2. Click "Add" and enter your domain name (e.g., `memorybearsdr.com`).
3. Vercel will provide you with DNS configuration instructions.

### Configure GoDaddy DNS

1. Log in to your GoDaddy account.
2. Go to "My Products" > Your domain > "DNS".
3. You'll need to set up the following DNS records:

#### Option 1: Using Vercel nameservers (recommended)
   
Replace GoDaddy's nameservers with Vercel's nameservers. Vercel will provide you with nameserver addresses (usually ns1.vercel-dns.com, ns2.vercel-dns.com).

1. In GoDaddy, go to your domain's DNS management.
2. Look for "Nameservers" section.
3. Select "Change" or "Custom nameservers".
4. Enter the Vercel nameservers provided in the Vercel dashboard.
5. Save changes.

#### Option 2: Using GoDaddy DNS settings

Create an A record and CNAME records:

1. Add an A record:
   - Type: A
   - Name: @ (represents the root domain)
   - Value: 76.76.21.21 (Vercel's IP address)
   - TTL: 600 seconds or 1 hour

2. Add a CNAME record:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com
   - TTL: 600 seconds or 1 hour

## Step 3: Verify Domain Configuration

1. After setting up your DNS records, go back to your Vercel project dashboard.
2. In the "Domains" section, your domain status should eventually change to "Valid Configuration".
3. Note that DNS propagation can take up to 48 hours, but typically it happens within a few hours.

## Step 4: Set Up SSL Certificate

Vercel automatically provides and manages SSL certificates for your domains. Once your domain is verified, Vercel will issue an SSL certificate for you.

## Step 5: Test Your Website

1. Once the DNS changes have propagated, visit your domain (`memorybearsdr.com`) to ensure everything is working correctly.
2. Test various pages and features of your website.

## Troubleshooting

- **Domain Not Connecting**: If your domain isn't connecting after 48 hours, verify your DNS settings again.
- **SSL Certificate Issues**: If you see SSL warnings, wait a bit longer as certificate propagation can take time.
- **404 Errors**: Make sure your pages are properly built and deployed.

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [GoDaddy DNS Settings Help](https://www.godaddy.com/help/manage-dns-records-680)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)

## Maintenance and Updates

To update your website in the future:
1. Make changes to your codebase.
2. Push the changes to your GitHub repository.
3. Vercel will automatically deploy the updates.

For manual deployments, you can use the Vercel CLI:
```
npm i -g vercel
vercel login
vercel --prod
``` 