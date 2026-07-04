# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

**AskMykonos.ai** — a static landing site for a Mykonos AI travel concierge,
currently prepared as a **scripted demo + domain-acquisition showcase** (like
AskSingapore). Part of the "ASK AI Travel Network" (sibling: AskSantorini.ai — live).

There is **no build step and no framework**: plain HTML, one CSS file, one JS file.
Deployed as static files on **Cloudflare Pages** (`Build command: empty`,
`Output directory: /`). Do not introduce a bundler, package.json, or npm scripts
unless explicitly asked.

## ⚠️ Deploy: push to main = INSTANT LIVE

The Pages project is git-connected to `main` (github.com/noustelos/askmykonos).
**Every push to main deploys straight to askmykonos.ai** — no preview step.
Work on a branch, verify locally, and only merge/push when asked. For rollback,
revert/reset to the previous main commit and push.

`styles.css`/`script.js` are edge- and browser-cached for 24h (`_headers`), so the
HTML references them with a `?v=` query — **bump that version whenever you change
either file**, or live visitors keep the stale asset for up to a day.

## Files that matter

- [index.html](index.html) — the whole landing page (acquisition banner, hero +
  chat card + windmill SVG, questions, how-it-works, tours, concierge, ASK-network
  panel, acquisition strip, footer, cookie banner, modals).
- [styles.css](styles.css) — the single stylesheet, shared by ALL pages.
- [script.js](script.js) — all interactivity, served un-minified.
- [faq.html](faq.html) / [faq-el.html](faq-el.html) — bilingual FAQ (two static files).
- [privacy-policy.html](privacy-policy.html) — legal page, **English only**, no JS.
- [404.html](404.html) — not-found fallback.
- [knowledge/](knowledge/) — 11 Markdown files (beaches, sunsets, tours, transport,
  food, villages, partners, partner-rules, faqs, safety, concierge). Raw material for
  the scripted-answer phase. **Not loaded by the frontend.**
- [assets/brand/ask-mykonos-logo-night.svg](assets/brand/ask-mykonos-logo-night.svg) —
  current logo (coupe glass). `ask-mykonos-logo.svg` is the old light-theme logo, unused.
- [_headers](_headers) — Cloudflare Pages security headers (CSP, HSTS, cache).
- [robots.txt](robots.txt) / [sitemap.xml](sitemap.xml) — keep sitemap in sync with pages.
- `script.min.js` — **stale/unused**, not referenced by any page. Ignore (or delete if asked).

## Design system — "Mykonos by Night" (styles.css)

Dark Aegean glamour; theatrical but never neon-grid/cyberpunk. Tokens in `:root`:

- Canvas: `--midnight #0a1120` (page), cards `--card #121c31`, wells `--card-deep`.
- Whitewash: `--whitewash #f6f3ea` (headings, glowing white), body `--foam #c7cdda`,
  `--muted #8d95a8`.
- Gold luxury: `--gold #c9a55c`, `--gold-bright #e3c584` — hairlines, chips, badges.
- **Electric accent: bougainvillea `--bloom #ef5a8b` — CTAs ONLY.** Deliberately rare
  (nav CTA, primary buttons, acquisition banners, one H1 ornament dot, one
  gold→pink gradient on the answer preview). Do not spread it further.
- Type: Playfair Display (serif, headings + italic accents, Greek supported) + Inter.
- Signature: **moonlit windmill** — inline line-art SVG in the hero (`.hero-scene`),
  peeking behind the chat card; stars via static CSS gradients. Hidden ≤980px.
  The chat card is `align-self: start` + fixed `margin-top` so its top is
  deterministic — a vertically centered card used to swallow the windmill when
  it grew (longer EN greeting, short viewports). Don't re-center it; growth
  goes downward. Mobile resets the margin.
- Logo: **coupe glass** (Dionysos/nightlife) in whitewash/gold/pink; favicon matches.
- **Performance floor: 2017 MacBook Air.** No `backdrop-filter`, no `filter: blur`,
  static gradients only. Keep it that way.
- Legacy aliases (`--pine`, `--brass`, `--linen`…) remap onto the night palette so old
  selectors keep working — prefer the new token names in new code.
- Chat bubble semantics: bot = night-sea navy, user = whitewash.

## Current page structure (post-restructure)

- **Dead emails removed**: NO `@askmykonos.ai` address works — none may appear
  anywhere (grep-verified zero). All contact points to **info@asksantorini.ai**
  (privacy page ×2, index privacy/terms modals, llms.txt ×2 + acquisition banners).
  The Contact panel (form) and Partners panel are gone.
- **Acquisition messaging**: top pill banner (above header) + pre-footer strip, both
  mailto **info@asksantorini.ai** (the working address), subject
  "AskMykonos.ai Domain Acquisition".
- **ASK network panel** (replaces Contact panel): asksantorini.ai LIVE /
  asksingapore.ai DEMO / askmykonos.ai DEMO—this site / askparos.ai COMING SOON.

## Privacy & cookies (demo-appropriate, shipped)

- The full-GDPR policy was **replaced with an honest demo note** (5 sections:
  no data collection / scripted in-browser chat / local-only preferences /
  Cloudflare hosting / contact info@asksantorini.ai). The index privacy modal
  carries the same message bilingually; the terms modal kept "verify info /
  independent guide". Leftovers fixed at the same time: privacy meta
  descriptions claiming "Cloudflare Worker + Google Gemini" processing, dead
  nav anchors (#chatbot/#partners), stale theme-color.
- **Cookie banner is informational only** — no tracking exists, so there is no
  consent split: one "Got it"/«Κατάλαβα» button stores `dismissed` in
  localStorage (`askMykonosCookiePreference`) and hides the banner. Don't
  reintroduce Accept/Necessary buttons unless real analytics arrive.
- Any legal-ish wording change (privacy, terms, cookie text) is **Nikos'
  call** — propose, don't ship.

## Chat: SCRIPTED DION DEMO (shipped, no backend)

The chat is a **client-side scripted demo** — no backend, no API, no keys, no voice.
`workerUrl` stays the placeholder; the scripted engine lives in the
`!isWorkerConfigured` branch of `sendMessage`, so a real backend simply replaces
that branch when/if it comes.

- **`DION_SCRIPT {en, el}`** in script.js (verbatim from Nikos' dion-script.md):
  greeting + 8 chip answers + 8 card-prefill answers + fallback + emergency.
  **EN = camp/theatrical Dion; EL = clean professional concierge.**
- **Matching**: exact match (normalized: lowercase, accent-insensitive, trailing
  punctuation stripped) against 32 strings (16 known questions × 2 languages,
  chip texts in `translations.*.questions` + `DION_QUESTIONS`, which must mirror
  the `data-chat-prefill-*` attributes) → DION_SCRIPT key.
- **Emergency guardrail**: free text passes an EN+EL emergency-keyword scan FIRST
  → drop-the-act reply (112/166/100/108). Known questions (our own safe texts —
  one contains the word "help") bypass the scan via the exact-match shortcut.
- **Delivery**: chips/cards prefill the input and auto-send (300ms) → typing dots
  (800ms) → word-by-word reveal (45ms/word, opacity-only spans, `textContent` —
  never innerHTML with user input). **Reduced motion: reveal stays ON (it's the
  demo concept), dots and smooth scrolls OFF.**
- **LIVE DEMO badge** in the chat header (EL: «ΖΩΝΤΑΝΟ DEMO») — honest signal.
- **Honest placeholder**: the input says "Tap a suggested question below" /
  «Επιλέξτε μια ερώτηση παρακάτω» — it steers to the chips/cards and must not
  promise free-form AI (free typing still works → fallback/emergency).
- **Grounded**: places only — no venue names, no prices, no discount codes
  (TRUTH OVER DRAMA, per knowledge/ do-not-invent lists).
- P4 (beach club) and P8 (car rental) have no card — reachable only by typing
  their exact question.

## i18n (script.js)

- Two dictionaries in `translations` (`en`, `el`). `data-i18n="key"` sets textContent,
  `data-i18n-attr="attr:key,..."` sets attributes.
- Language state: `?lang=en|el` → `localStorage.preferredLanguage` → `en`.
- When you **remove** a `data-i18n` element, remove its orphaned keys from **both**
  dictionaries; when you add one, add both languages.
- The FAQ and privacy pages deliberately do NOT load script.js — FAQ localization is
  two static files cross-linked with `hreflang`.

## Cleanup ledger

- **Done**: mic button + Web Speech code removed; Contact/Partners panels removed;
  orphaned i18n keys pruned; footer credit left-aligned single line; night logo/favicon.
- **Done (privacy phase)**: GDPR boilerplate → demo note; zero dead emails
  (grep-verified); informational cookie banner; README rewritten as factual
  demo documentation. Current asset version: `?v=dion5`.
- **Done (honesty touches)**: Instagram links → asksantoriniai profile; chat
  status dot green → `--bloom` pink (demo signal, matches LIVE DEMO badge);
  "Powered by advanced AI" line → honest scripted-demo note linking to
  asksantorini.ai (third sanctioned cross-site reference); the "answers may
  need verification" disclaimer removed entirely (scripted answers need no
  such hedge) — `geminiNote` keys and `.chat-disclaimer-note` CSS pruned.
- **Pending**: `script.min.js` stale (delete when asked); the "Ask naturally"
  step copy still says "Type or speak" (voice removed) — fix in the copy phase;
  OG/social SVG still light-themed; old `ask-mykonos-logo.svg` unused; llms.txt
  intro still describes a "live AI guide" (demo honesty pass pending — Nikos).

## Previewing changes (headless Chrome)

No dev server needed; `python3 -m http.server 8787` or open files directly. Screenshots:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --hide-scrollbars --window-size=1440,3000 --screenshot=/tmp/out.png "file://$PWD/index.html"
```

Gotchas:
- `.hero` is `min-height: calc(100vh - …)` → for full-page shots inject
  `.hero{min-height:auto !important}` into a temp copy **inside the repo dir**
  (a copy in /tmp can't reach the relative styles.css).
- Headless layout viewport ≈ `window-size` + ~60px; mobile breakpoint is `≤980px`.
- The full mobile page is ~7000px tall — size the window accordingly.
- Runtime copy comes from the script.js dictionaries, which override the static HTML
  text via data-i18n — don't be surprised when rendered headings differ from index.html.

## Conventions & workflow

- Bilingual EN/EL everywhere user-facing. Keep footers and nav consistent across pages
  (exception: English pages link only the English FAQ; faq-el keeps Greek links).
- Reference files as clickable links, e.g. [styles.css](styles.css).
- Commit/push only when asked (see deploy warning above). Commit messages end with:
  `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`
- Known inconsistency: [privacy-policy.html](privacy-policy.html) is still English-only.
- Zero cross-project dependency: never wire this site to the AskSantorini Worker or any
  shared infra. The only sanctioned cross-site references are the acquisition mailto,
  the network panel links, the chat card's "live AI concierge" link to asksantorini.ai,
  and the Instagram links (asksantoriniai profile).
