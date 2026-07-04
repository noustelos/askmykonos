# AskMykonos.ai

Static demo site for **AskMykonos.ai** — a scripted AI-travel-concierge
**demonstration** for Mykonos, Greece. Part of the "ASK" network of AI travel
guides. The domain is **available for acquisition**: info@asksantorini.ai.

## Status

This is a **demo, not a live AI product**:

- The chat is a **scripted demo** that runs entirely in the browser — no
  backend, no API calls, no keys, no voice, no data collection.
- Persona: **Dion** — camp/theatrical in English, clean professional concierge
  in Greek. Scripted answers cover 16 known questions (8 starter chips +
  8 card prefills), plus a fallback and an emergency guardrail (drops the act,
  gives 112/166/100/108).
- A "LIVE DEMO" badge and an informational (non-consent) cookie note keep the
  demo honest with visitors.

## Stack

- Plain **HTML + one CSS file + one vanilla JS file**. No framework, no build
  step, no package.json.
- Bilingual EN/EL via a `translations` dictionary in `script.js`
  (`?lang=en|el` → localStorage → default `en`).
- Design: "Mykonos by Night" — dark Aegean palette, whitewash/gold,
  bougainvillea-pink CTAs, moonlit-windmill hero SVG, coupe-glass logo.
  No `backdrop-filter`/blur (old-hardware performance floor).

## Files

| Path | Purpose |
| --- | --- |
| `index.html` | Landing page: acquisition banners, hero + scripted chat, chips, tours/concierge cards, ASK-network panel |
| `styles.css` | Single stylesheet, shared by all pages |
| `script.js` | i18n, UI logic and the Dion scripted chat engine |
| `faq.html` / `faq-el.html` | Bilingual FAQ (two static pages) |
| `privacy-policy.html` | Honest demo privacy note (English) |
| `knowledge/` | Markdown reference material (not loaded by the frontend) |
| `_headers` | Cloudflare Pages security headers (CSP `connect-src 'self'`) |

## Local development

Open `index.html` directly, or:

```bash
python3 -m http.server 8787
```

## Deploy

Cloudflare Pages, **git-connected to `main`**: every push to `main` goes
**instantly live** on askmykonos.ai (no preview step). `styles.css` and
`script.js` are cached for 24h, so their references carry a `?v=` query —
**bump it whenever either file changes**.

## The ASK network

| Domain | Status |
| --- | --- |
| asksantorini.ai | LIVE |
| asksingapore.ai | DEMO |
| askmykonos.ai | DEMO (this repo) |
| askparos.ai | COMING SOON |

Zero cross-project dependency: this site calls no external services. The only
sanctioned cross-site references are the acquisition mailto
(info@asksantorini.ai) and the network panel links.
