# Simple repository to reproduce issue with Next.js 13 and NextTranslate

## Start the app 

To start the development server run `nx serve nextjs-13`. Open your browser and navigate to http://localhost:4200/. Happy coding!

## Build and run production app

To build and serve the app run command 
```bash
nx run nextjs-13:build:production
```

Then you are able to serve production build by
```bash
nx run nextjs-13:serve:production
```

## What is the issue?

When you run production build locally you can get to all routes without 404, but when you deploy app to vercel, then all dynamic routes in `app` directory throws 404.
This is not problem if you use old approach with `pages` directory (example not included in this repo).

## Branches

- `main` - Next.js 12 with NextTranslate
- `without-next-translate` - Next.js 13 without NextTranslate - Working fine but without translation :) 
