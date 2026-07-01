# Your Portfolio Site

A minimalist portfolio with playful accents, built with plain HTML/CSS/JS —
no build tools, no dependencies. Ready to host free on GitHub Pages.

## 1. Fill in your info

Two files need your details — everything is written in plain English, no coding required:

- **`index.html`** — your name, tagline, and footer links (email, LinkedIn, GitHub). Look for text in `[brackets]`.
- **`script.js`** — the `CATEGORIES` array near the top has all your projects. Replace `[Add institution]` and `[Add dates]` for each project with the real details.

To add a new project later, copy an existing `{ name: ..., institution: ..., dates: ..., tags: {...} }` block and edit it.

## 2. Preview it locally (optional)

Just double-click `index.html` to open it in your browser, or in VS Code use the "Live Server" extension for auto-reload while you edit.

## 3. Put it on GitHub

1. Create a free [GitHub](https://github.com) account if you don't have one.
2. Click the **+** in the top right → **New repository**.
3. Name it exactly `your-username.github.io` (replace `your-username` with your actual GitHub username). This exact naming is what makes GitHub host it as a personal site.
4. Set it to **Public**, and don't initialize with a README (you already have one).
5. On your computer, open a terminal in this `portfolio` folder and run:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

(No terminal experience? You can also just drag-and-drop all the files into the empty repo through GitHub's web interface — click **Add file → Upload files**.)

## 4. Turn on GitHub Pages

1. In your repo, go to **Settings → Pages**.
2. Under "Build and deployment," set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. Wait 1–2 minutes. Your site will be live at:

```
https://your-username.github.io
```

## 5. Updating the site later

Any time you want to add a project or fix text, edit the file, then run:

```bash
git add .
git commit -m "Update projects"
git push
```

The live site updates automatically within a minute or two.

## Optional: custom domain

If you ever want `gretasomething.com` instead of the `.github.io` URL, buy the domain from any registrar (~$10–15/year) and add it under **Settings → Pages → Custom domain**. Hosting itself stays free either way.
