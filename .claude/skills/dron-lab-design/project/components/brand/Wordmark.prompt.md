# Wordmark

Typographic brand lockup for El Dron en la Sopa — **no official logo file was provided**, so the brand renders in type. The `{ }` brackets (mono, orange) evoke code and a drone hovering; "sopa" is set in orange.

```jsx
<Wordmark size="lg" />
<Wordmark tone="light" />   {/* on dark surfaces */}
```

Sizes: `sm` · `md` · `lg`. Tone: `dark` · `light`.

## Alternativas de logo (elige una)
No hay logo oficial, así que se ofrecen 3 lockups tipográficos vía `variant`:
- `brackets` — `{ el dron en la sopa }`, corchetes de código (original).
- `monogram` — `⊕ DRON·SOPA`, glifo tipo HUD/mira con degradado + mayúsculas condensadas (**el más futurista**).
- `terminal` — `~/dron-en-la-sopa ▋`, prompt de línea de comandos con cursor parpadeante.

```jsx
<Wordmark variant="monogram" size="lg" tone="light" />
<Wordmark variant="terminal" />
```
