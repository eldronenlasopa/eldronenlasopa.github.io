---
name: dron-en-la-sopa-design
description: Use this skill to generate well-branded interfaces and assets for El Dron en la Sopa (empresa de servicios tecnológicos: apps web, páginas, automatizaciones), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Global CSS:** link `styles.css` (it `@import`s all tokens and fonts).
- **Fonts:** Space Grotesk (display), Manrope (body), JetBrains Mono (mono/labels) — loaded from Google Fonts CDN via `tokens/fonts.css`.
- **Brand colors:** `--brand-orange #FF6B35` (acción), `--brand-yellow #F7C948` (acento), `--ink-950 #0B0F1A` (superficie oscura).
- **Components:** in `components/`, exported on `window.ElDronEnLaSopaDesignSystem_5a2264` after loading `_ds_bundle.js`. Button, IconButton, Wordmark, Input, Textarea, Select, ContactForm, Card, Badge, Tag, Header, Footer, PricingCard.
- **UI kits:** `ui_kits/marketing-site`, `ui_kits/services-landing`, `ui_kits/client-dashboard`.
- **Slides:** `decks/slide-*.html` (16:9, 1280×720).
- **Voz:** español, "nosotros"/"tú", profesional pero cercano, eyebrows mono con prefijo `//`, sentence case en títulos.

## Notas / pendientes
- No hay logo oficial: usa el componente `Wordmark` (tipográfico) donde iría la marca.
- Iconografía provisional con glifos Unicode; para producción, adoptar Lucide u otro set y actualizar.
