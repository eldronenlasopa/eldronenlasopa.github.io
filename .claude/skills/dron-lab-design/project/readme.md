# El Dron en la Sopa — Design System

Sistema de diseño para **El Dron en la Sopa**, empresa de servicios tecnológicos que brinda soluciones informáticas a otras empresas: aplicaciones web, páginas y landings, automatizaciones e integraciones.

> **Origen de este sistema.** No se adjuntó código, Figma, logo ni materiales de marca existentes. Todo aquí se creó **desde cero** a partir de la descripción de la empresa y una dirección de marca elegida con el usuario (personalidad *profesional pero cercana*, idioma *español*, paleta *midnight + naranja señal + amarillo*, tipografía *geométrica moderna*). Cuando llegue material real (logo, fotos, capturas del producto), debe reemplazar lo aquí propuesto.

---

## Nombre y marca

- **Nombre formal:** *El Dron en la Sopa* — referencia a que **la tecnología está presente en todo, hasta en la sopa**. Se usa como firma/tagline y en documentos formales (portada de propuestas, copyright, footer).
- **Nombre comercial / corto:** **DronLab** — marca de uso diario. El logo oficial (`Wordmark variant="terminal"`) lo muestra como prompt `~/dronlab ▋`.

## Contexto de producto

La empresa vende **servicios a medida**, no un producto SaaS. Las superficies representadas:

- **Sitio de marketing** — homepage que presenta servicios, planes y contacto. (`ui_kits/marketing-site/`)
- **Landing de servicio** — página enfocada en un solo servicio (ej. Automatizaciones), orientada a conversión. (`ui_kits/services-landing/`)
- **Panel de cliente** — portal donde el cliente ve sus proyectos, actividad, tickets y facturas. (`ui_kits/client-dashboard/`)
- **Deck de ventas / propuestas** — plantillas de slides 16:9 para propuestas comerciales. (`decks/`)

---

## CONTENT FUNDAMENTALS — cómo se escribe

- **Idioma:** español (España/LatAm neutro, con matices peruanos suaves: "S/" para soles, "hecho con café en Perú").
- **Persona:** hablamos de **"nosotros"** (el equipo) y tratamos al cliente de **"tú"**. Cercano, nunca acartonado.
- **Tono:** profesional pero cálido y con un guiño de humor seco — el nombre de la marca ya es un chiste, así que la copy puede permitírselo con moderación (ej. *"Cuatro pasos, cero drama"*). Nunca payaso; primero claridad, luego chispa.
- **Casing:** títulos en **sentence case** ("Software que hace crecer tu empresa"), nunca Title Case. Los *eyebrows* en mono van en MAYÚSCULAS con prefijo `//` (ej. `// Qué hacemos`), evocando comentarios de código.
- **Claridad sobre jerga:** se nombran tecnologías concretas como prueba (React, Node.js, n8n) pero los beneficios se explican en lenguaje de negocio ("menos errores", "más tiempo").
- **Verbos de acción** en los CTA: *Solicitar propuesta*, *Agendar diagnóstico*, *Empezar*, *Contáctanos*.
- **Emoji:** casi nunca. Se permite **un** emoji ocasional de cierre cálido (☕ en el footer). No usar emoji como iconos de UI.
- **Cifras** con impacto: se destacan datos grandes ("−40% de tiempo") sin inflar; siempre atados a un beneficio concreto.

Ejemplos de voz:
- Eyebrow: `// Soluciones informáticas a medida`
- Titular: *"Software que hace crecer tu empresa"*
- Subtítulo: *"Del prototipo a producción, con comunicación cercana en cada paso."*
- CTA: *"Solicitar propuesta →"*

---

## VISUAL FOUNDATIONS

**Vibe general.** Técnico, futurista y confiable con calidez. **Dark-first**: superficies "midnight" como protagonistas (hero, footer, panel), naranja señal para la acción, **cian eléctrico `#22D3EE` como acento HUD** y amarillo cálido puntual. Recursos futuristas: *glow* neón, textura de grid/puntos, titulares con degradado y paneles *glass*. Sensación de estudio de software serio y actual, no de startup ruidosa.

- **Color.** Base navy-tinted (`--ink-950 #0B0F1A` … `--ink-50`). Marca: naranja `#FF6B35` (acción, "el dron"), amarillo `#F7C948` (acento cálido) y **cian `#22D3EE` (acento HUD/tech)**. El naranja es **solo para acción y énfasis**; el cian para señales tech, dots vivos y bordes glass. Estados semánticos con sus *tints* claros. Fondos: claros en contenido de lectura, oscuros (`--gradient-ink`) en hero/footer/CTA/panel.
- **Degradados & glow.** `--gradient-signal` (naranja→amarillo) y `--gradient-hud` (cian→naranja) para CTAs y marcas; `--text-gradient` para titulares clave sobre oscuro (blanco→naranja→cian). Glows neón `--glow-orange` / `--glow-cyan` / `--glow-soft-cyan` como único "efecto". Nada de gradientes bluish-purple genéricos.
- **Texturas.** Sobre superficies oscuras: `--texture-grid` (48px) y `--texture-dots` (22px) enmascaradas con un radial para desvanecer los bordes. Nunca ruido ni patrones pesados.
- **Glass.** Paneles `Card glass` y chips: `--glass-dark` + `backdrop-filter: blur(12px)` + borde `--glass-border` cian tenue. Para chrome y tarjetas sobre hero oscuro.
- **Tipografía.** Display **Space Grotesk** (700) con tracking negativo (`-0.03em`) para titulares geométricos; cuerpo **Manrope** (400–800) humanista y legible; acento **JetBrains Mono** para eyebrows, etiquetas, datos y código. Titulares en sentence case.
- **Espaciado.** Base 4px (`--space-*`). Secciones con `96px` de padding vertical. Contenedor máximo `1200px`.
- **Imágenes.** No se proveyeron fotos. Cuando existan: preferir tono **cálido**, gente real trabajando, nada de stock corporativo frío. Placeholder recomendado hasta tener material.
- **Fondos / texturas.** Planos. Sin patrones repetidos ni ruido. Único recurso decorativo: *glow* radial suave en oscuros.
- **Animación.** Sobria. `--ease-out` (cubic-bezier .22,1,.36,1) para entradas; duraciones 120/200/360ms. Sin bounces exagerados ni loops infinitos.
- **Hover.** Botones: oscurecen ~6% (`filter: brightness(.94)`). Enlaces y nav: cambian a naranja. Cards interactivas: se elevan `-4px` y suben de sombra.
- **Press.** Botones escalan a `0.97`; IconButton a `0.92`. Sin cambio de color adicional.
- **Bordes.** 1px `--border-subtle`/`--border-default` en claro; `--border-inverse` en oscuro. Inputs 1.5px, foco 2px naranja con halo (`box-shadow 0 0 0 4px` del focus-ring).
- **Sombras.** Suaves, tintadas de navy (`--shadow-xs`…`--shadow-lg`). Uso moderado. Sombra especial `--shadow-brand` = *glow* naranja bajo los CTA primarios.
- **Radios.** `sm 8 / md 12 (default inputs y cards pequeñas) / lg 18 (cards) / xl 28 (pricing) / pill 999 (botones, badges, tags-chip)`.
- **Cards.** Blancas, `radius-lg`, borde 1px sutil, sombra suave. Variante `accent` con barra naranja superior de 4px. Variante interactiva con *lift* al hover.
- **Transparencia y blur.** Header en claro usa vidrio: `rgba(255,255,255,.86)` + `backdrop-filter: blur(12px)`. Blur reservado para chrome sobre contenido; no decorativo.
- **Layout fijo.** Header sticky; sidebar del panel fija a la izquierda (250px).

---

## ICONOGRAPHY

- **No se proveyó un set de iconos.** Actualmente el sistema usa **glifos Unicode geométricos** (◆ ▲ ⬡ ⬢ ◧ ▤ ◇ ▦ ▥ ◔) como marcadores de servicio y navegación, elegidos por su afinidad con la estética técnica/geométrica.
- **⚠️ Sustitución pendiente / ASK:** para producción se recomienda adoptar un set consistente. Sugerencia: **Lucide** (stroke 1.5–2px, redondeado) vía CDN — encaja con la tipografía geométrica. Si prefieres otro (Phosphor, Heroicons), indícalo y lo integro.
- **Emoji:** no se usa como iconografía de UI. Solo un ☕ de cierre cálido, opcional, en el footer.
- El único "logo" es un **wordmark tipográfico** (componente `Wordmark`), con corchetes `{ }` en mono naranja que evocan código y el dron sobrevolando. **No es un logo oficial** — es un marcador hasta tener la marca real.

---

## Componentes

Namespace del bundle: `window.ElDronEnLaSopaDesignSystem_5a2264`.

- **Button** — CTA pill; variantes primary / secondary / outline / ghost / inverse.
- **IconButton** — botón circular para un glifo; solid / ghost / outline.
- **Wordmark** — lockup tipográfico de marca (no hay logo oficial).
- **Input** — campo de texto con label, hint, error, icono.
- **Textarea** — campo multilínea.
- **Select** — desplegable con chevron propio.
- **ContactForm** — formulario de contacto compuesto (Input + Select + Textarea + Button).
- **Card** — contenedor de superficie; elevación, accent, interactive.
- **Badge** — pill de estado en mono; tonos semánticos.
- **Tag** — chip seleccionable/removible (stack, filtros).
- **Header** — navegación superior del sitio; variante glass y inverse.
- **Footer** — footer oscuro con columnas.
- **PricingCard** — tarjeta de plan; variante `featured` destacada.

Cada componente vive en `components/<grupo>/` con su `.jsx`, `.d.ts`, `.prompt.md` y una tarjeta `@dsCard` por directorio. Grupos: `actions/`, `forms/`, `data-display/`, `navigation/`, `marketing/`, `brand/`.

### Adiciones intencionales
- **Wordmark** — no es una primitiva típica, pero al no existir logo se necesita un marcador de marca reutilizable y consistente. Ahora ofrece 3 variantes de logo (`brackets`, `monogram`, `terminal`) — ver tarjeta "Logo — 3 alternativas" en la pestaña Design System.
- **IconButton** — envoltorio para el uso puntual de glifos en toolbars y cards.

---

## Índice del proyecto (manifest)

- `styles.css` — punto de entrada global (solo `@import`s). Los consumidores enlazan **solo** este archivo.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `components/` — `actions/`, `forms/`, `data-display/`, `navigation/`, `marketing/`, `brand/`.
- `guidelines/` — tarjetas de especímenes (color, tipo, spacing, efectos, marca) para la pestaña Design System.
- `ui_kits/marketing-site/` — homepage de marketing (`index.html` + secciones).
- `ui_kits/services-landing/` — landing de un servicio.
- `ui_kits/client-dashboard/` — panel de cliente.
- `decks/` — slides de propuesta 16:9 (`slide-title`, `slide-agenda`, `slide-services`, `slide-stat`, `slide-pricing`, `slide-quote`).
- `SKILL.md` — descriptor para uso como Agent Skill.
- `assets/` — (vacío) reservado para logo, fotos e iconos cuando existan.

Generados automáticamente (no editar): `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`.
