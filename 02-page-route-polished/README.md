This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# Pages

`/`(http://localhost:3000): `pages/index.js`. The page auto-updates as you edit the file.

`/posts/first-post`(http://localhost:3000/posts/first-post): `pages/posts/first-post`

`/api/hello`(http://localhost:3000/api/hello): This endpoint can be edited in `pages/api/hello.js`. The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# CSS

`/component/layout.module.css`(css) → `/component/layout.js`(js component) → `/posts/first-post`(page)

`/styles/Home.module.css`(css) → `/pages/index.js` (page)

`/styles/globals.css`(css) → `/pages/_app.js`→ all pages

# What we do from the init project

1. create a page `/posts/first-post.js`, add its css `/component/layout.module.css` and `/component/layout.js`, link it to `index.js`
2. alter `<main><h1>` of `index.js`, link it to `first-post`.
3. create `/public/images` directory, and put a picture into it.
4. Update `/components/layout.module.css`
5. create `/styles/utils.module.css` for **typography** 


We use:
- `<Link href>` to replace `<a href>`.
- `<Image>` to replace `<img>`
