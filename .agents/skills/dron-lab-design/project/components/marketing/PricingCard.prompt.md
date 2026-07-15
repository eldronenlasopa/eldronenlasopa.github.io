# PricingCard

A single plan tile for a pricing grid. Composes Button and Badge. Set `featured` on the recommended plan — it renders dark, scales up slightly, and gets a shadow. Feature list uses orange check marks.

```jsx
<PricingCard
  name="Emprende" price="S/ 1,200" description="Para lanzar tu primera web."
  features={['Landing page', 'Formulario de contacto', 'Hosting 1 año']}
  cta="Empezar"
/>
<PricingCard name="Crece" price="S/ 3,500" featured
  features={['App web a medida', 'Panel de administración', 'Soporte prioritario']} />
```
