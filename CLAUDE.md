# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

**AskMykonos.ai** — a static marketing + live-AI-chat landing site for a Mykonos
travel concierge. Part of the "ASK AI Travel Network" (sibling site: AskSantorini.ai).

There is **no build step and no framework**: plain HTML, one CSS file, one JS file.
It is deployed as static files on **Cloudflare Pages** (`Build command: empty`,
`Output directory: /`). Do not introduce a bundler, package.json, or npm scripts
unless explicitly asked.

## Files that matter

- [index.html](index.html) — the whole landing page (hero + chat card, questions,
  how-it-works, tours, concierge, partners, contact form, footer, cookie banner, modals).
- [styles.css](styles.css) — the single stylesheet. **This is the only CSS the site loads.**
- [script.js](script.js) — all interactivity (see below). Served un-minified.
- [faq.html](faq.html) / [faq-el.html](faq-el.html) — bilingual FAQ (two separate static files).
- [privacy-policy.html](privacy-policy.html) — legal page, **English only**, static (no JS).
- [404.html](404.html) — not-found fallback.
- [knowledge/](knowledge/) — Markdown reference/prompt material for the future Worker
  (beaches, sunsets, tours, transport, food, partners, faqs…). **Not loaded by the frontend.**
- [_headers](_headers) — Cloudflare Pages security headers (CSP, HSTS, cache).
- [robots.txt](robots.txt) / [sitemap.xml](sitemap.xml) — crawl directives. Keep the sitemap
  in sync when adding/removing pages.
- `script.min.js` — **stale/unused**, not referenced by any page. Ignore it (or delete if asked).

## Design system (styles.css)

"Quiet luxury retreat" theme. Design tokens live in `:root` at the top of the file:

- Canvas: warm linen `--linen #f4efe4` / parchment `--parchment #fbf8f1`.
- Ink: deep pine green `--pine #1e332a`, body `--text #37332a`, `--muted #7b7365`.
- Accents: brass `--brass #99742f`, olive `--olive`, clay `--clay`.
- Type: Playfair Display (serif, headings + italic accents) + Inter (sans, body).
- Legacy aliases (`--navy`, `--teal`, `--terracotta`, `--surface`…) map onto the new
  palette so older selectors keep working — prefer the new token names in new code.

Conventions: hairline borders (`--line`), one soft shadow (`--shadow-soft`/`--shadow`),
pill radii for chips/buttons, generous whitespace, minimal motion. Two intentional dark
"pine" panels (the chatbot/contact block). Keep it calm — avoid glows, neon gradients,
and repeated CTAs (a previous cleanup removed those).

## i18n (script.js)

- Two dictionaries in `translations` (`en`, `el`). Text is applied to any element with
  `data-i18n="key"` (sets `textContent`) or `data-i18n-attr="attr:key,..."` (sets attributes).
- Language state: `?lang=en|el` URL param → falls back to `localStorage.preferredLanguage`
  → defaults to `en`. Toggled by the `[data-language]` buttons in the header.
- When you **remove** a `data-i18n` element from HTML, also remove its now-orphaned keys
  from **both** `en` and `el` (they are otherwise inert but count as dead code).
- `updateSeo()` overwrites `document.title`/meta from `translations[lang]`, so it only runs
  where it should. **The FAQ and privacy pages deliberately do NOT load script.js** — that's
  why FAQ localization is done as two static files (`faq.html` + `faq-el.html`,
  cross-linked with `hreflang`) rather than one toggle page.

## Live chat architecture (not yet connected)

Intended flow: `Frontend → Cloudflare Worker → Gemini API`, Worker returns `{ "reply": "..." }`.
The site is in **local-preparation mode**: `workerUrl` in [script.js](script.js) is the
placeholder `PASTE_ASKMYKONOS_WORKER_URL_HERE`, so the chat shows a local message instead of
calling out. Do not wire it to the old Santorini Worker. `_headers` keeps `connect-src 'self'`
until a dedicated Worker exists. No API keys live in the frontend.

## Previewing changes (headless Chrome)

There is no dev server requirement; open files directly. For screenshots:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --hide-scrollbars --window-size=1440,3000 --screenshot=/tmp/out.png "file://$PWD/index.html"
```

Gotcha: `.hero` is `min-height: calc(100vh - …)`, so full-page shots have a huge blank
gap. For full-page captures, inject `.hero{min-height:auto !important}` (e.g. via `sed` into
a temp copy) before rendering. Headless width ≈ `window-size` + ~60px devtools chrome, and
the mobile breakpoint is `≤980px`.

## Conventions & workflow

- Bilingual EN/EL everywhere user-facing. Keep footers and nav consistent across pages.
- Reference files as clickable links, e.g. [styles.css](styles.css).
- Commit/push only when asked. Commit messages end with:
  `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`
- Known inconsistency to be aware of: [privacy-policy.html](privacy-policy.html) is still
  English-only and its footer differs slightly from the others.
