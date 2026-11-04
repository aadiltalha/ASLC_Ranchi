# ASLC Consulting & Training – website

React + Vite + React Router + Tailwind CSS v4. No TanStack, no backend.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs ./dist
npm run preview
```

## Structure
- `src/pages/` – Home, About, Services, Team, Contact
- `src/components/` – `Layout.jsx` (header, footer, theme toggle), `ui.jsx` (buttons, page head, shared sections)
- `src/data.js` – services list and inquiry email
- `src/styles.css` – the full design system (light + dark)
- `public/` – favicon, robots.txt, team photos (`public/members/`)

## Notes
- Hosting: it's a single-page app, so configure your host to serve `index.html` for all routes (Netlify/Vercel/Cloudflare Pages do this with a rewrite rule).
- Team photos: add `public/members/manager.jpg` and `public/members/it.jpg` (cards hide the image until they exist).
- The contact form validates, then POSTs to FormSubmit.co, which emails every submission to `lashahdeo@gmail.com` (change in `src/data.js`). The first submission triggers an activation email to that address – click the link in it once, and after that all submissions arrive normally.
