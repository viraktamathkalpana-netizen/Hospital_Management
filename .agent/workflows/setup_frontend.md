---
description: Set up Next.js Frontend with HTML/CSS focus
---
## Next.js Frontend Setup Steps

This workflow dictates the process for setting up the frontend application for Vercel, prioritizing HTML and standard CSS.

1. **Navigate:** Change directory to the `frontend` folder.
2. **Initialize App:**
   Initial Next.js app in the directory (avoiding Tailwind based on user preference).
   ```bash
   npx -y create-next-app@latest . --javascript --eslint --app --no-tailwind --no-src-dir --import-alias "@/*" --use-npm
   ```
3. **Clean Styling:** Clear boilerplate CSS and prioritize vanilla CSS / Module CSS over complex JS-in-CSS.
4. **Routing:** Create page scaffolding reflecting the app's needs (e.g., Dashboard, Login, Patients list).
5. **Run Locally:** `npm run dev`.
6. **Deploy:** Prepare deployment hooks on Vercel ensuring build tools are configured.
