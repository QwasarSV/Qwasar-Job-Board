This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisite/How to Run Dev Server
1. npm install - to make sure all files are installed/up to date
2. npm run dev - to run developement server in project_root/frontend/qwasar-jobboard
   Example of expected output to verify it works:
   
    > qwasar-jobboard@0.1.0 dev
    > next dev

    ▲ Next.js 15.3.3
    - Local:        http://localhost:3000
    - Network:      http://123.456.78.910:3000

    ✓ Starting...
    ✓ Ready in 1416ms

## Getting Started  
1. create an .env folder in the root of the frontend project folder
```
example .env 

NEXT_PUBLIC_API_URL=put_local_host_api_url_here 
```

First, run the development server:  
*Pease note* to run next js app make sure you are in the `qwasar-jobboard` in `frontend` folder<br>
=======
## Getting Started

First, run the development server:


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page will auto-update as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
