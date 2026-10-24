# Calyxar · PC Guard public website

A small static website for PC Guard's public privacy policy and customer support. No framework, account, hosting subscription, JavaScript build, or paid domain required.

## Structure

- `index.html` — landing page
- `privacy.html` — Microsoft Store privacy policy page
- `support.html` — public support contact
- `assets/css/style.css` — shared design and responsive styling
- `assets/js/site.js` — copyright year only; no analytics or cookies

## Free GitHub Pages deployment

1. Create a **public** GitHub repository such as `pcguard-privacy`.
2. Upload the **contents of this folder**, preserving the `assets` subfolders. Keep `index.html` at the repository root.
3. In repository **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/(root)`, then save.
4. Once deployed, open the actual GitHub Pages URL in a private browser window and test all navigation.
5. Use the **privacy policy page's actual URL** (for example `https://USERNAME.github.io/pcguard-privacy/privacy.html`) in Microsoft Partner Center, not just a guessed URL.

## Important checks before public release

- Confirm the claims about local processing and external network communications against the shipping application and third-party dependencies.
- Review any Windows/MSIX data virtualization, diagnostics, automated update, telemetry, and future licensing integrations.
- The policy describes **PC Guard**; it is not legal advice and not a certification.
- Do not upload biometric files, `events.db`, keys, developer signing certificates, logs, or application source.
- The public email `abakdev28@gmail.com` is shown openly by design.
