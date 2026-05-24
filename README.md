# AskMykonos.ai

Static site for **ASK MYKONOS AI**, a free live AI guide for Mykonos visitors.

The site includes the live chat interface, useful starter questions, partner CTA, lightweight legal notices, and a contact mailto workflow.

## Project Structure

- `index.html` - page structure, SEO metadata, Open Graph tags, content sections
- `styles.css` / `styles.min.css` - responsive styling, CSS variables, layout, cards, forms, modals
- `script.js` / `script.min.js` - starter question interactions, contact mailto workflow, privacy/terms modals, live chat
- `robots.txt` / `sitemap.xml` - search engine crawl directives
- `_headers` - Cloudflare Pages security headers
- `404.html` - static not-found fallback

## Local Development

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8787
```

Then visit:

```text
http://localhost:8787
```

## Local Preparation Mode

AskMykonos is currently in local preparation mode. It must not use the previous Santorini Worker. Before going live, create and configure a dedicated AskMykonos Cloudflare Worker.

## Future Live AI Chat Architecture

The intended live chat flow is:

```text
Frontend -> Cloudflare Worker -> Gemini API
```

Worker endpoint placeholder in `script.js`:

```text
PASTE_ASKMYKONOS_WORKER_URL_HERE
```

The frontend expects the Worker to return:

```json
{ "reply": "..." }
```

Current frontend requests include `message`, `destination`, `brand`, and `language`.
The dedicated Worker prompt must be configured separately for Mykonos-specific answers; the Worker source is not part of this static frontend repository.

Security:

- No API keys are stored in the frontend.
- The Gemini API key is stored as the Cloudflare Worker secret `GEMINI_API_KEY`.

CSP:

- `connect-src` is currently limited to `'self'` until a dedicated AskMykonos Worker is configured.

## Partner Knowledge

Partner data is currently stored in Markdown knowledge files.
Knowledge files are local prompt/reference material and are not automatically used by the Worker unless injected into the Worker prompt/context.
To make the bot actively use partner data, the Worker must later include selected partner context in its Gemini request.

## Deploy to Cloudflare Pages

1. Push these files to a Git repository.
2. In Cloudflare Pages, create a new project from that repository.
3. Use these build settings:

   ```text
   Framework preset: None
   Build command: leave empty
   Build output directory: /
   ```

4. Deploy.
5. Connect the custom domain `askmykonos.ai` in Cloudflare when ready.

## Next Updates

- Add richer live-chat guidance based on visitor context.
- Replace the contact mailto flow with a privacy-friendly contact backend if needed.
- Add real privacy and terms pages before collecting data.
- Add real partner links only after partnerships are confirmed.
- Add analytics only if privacy-friendly and clearly disclosed.
