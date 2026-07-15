# Button

The primary action control for El Dron en la Sopa. Pill-shaped, bold label. Use `primary` (orange, with soft glow) for the single main CTA per view; `secondary` (yellow) as a warm alternate; `outline`/`ghost` for lower emphasis; `inverse` (white) on dark surfaces.

```jsx
<Button variant="primary" size="lg" iconRight={<span>→</span>}>
  Solicitar propuesta
</Button>
<Button variant="outline">Ver servicios</Button>
```

Variants: `primary` · `secondary` · `outline` · `ghost` · `inverse`. Sizes: `sm` · `md` · `lg`. Props: `fullWidth`, `disabled`, `iconLeft`, `iconRight`. Hover darkens ~6%; press scales to 0.97.
