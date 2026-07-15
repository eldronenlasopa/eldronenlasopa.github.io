const { PricingCard } = window.ElDronEnLaSopaDesignSystem_5a2264;

function PricingSection() {
  return (
    <section id="planes" style={{ background: 'var(--surface-card)', padding: '96px 32px', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--brand-orange-600)', marginBottom: 14 }}>// Planes</div>
        <h2 style={{ margin: '0 0 12px', fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 'var(--fw-bold)', letterSpacing: 'var(--ls-tight)', color: 'var(--text-strong)' }}>
          Precios claros, sin sorpresas
        </h2>
        <p style={{ margin: '0 auto 52px', fontSize: 17, color: 'var(--text-muted)', maxWidth: 520 }}>
          Empieza con lo justo y crece a tu ritmo. Cada plan incluye acompañamiento cercano.
        </p>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', alignItems: 'stretch', flexWrap: 'wrap' }}>
          <PricingCard name="Emprende" price="S/ 1,200" description="Para lanzar tu presencia digital."
            features={['Landing page a medida', 'Formulario de contacto', 'Hosting 1 año incluido', '2 rondas de ajustes']} cta="Empezar" />
          <PricingCard name="Crece" price="S/ 3,500" featured description="Aplicación web completa a medida."
            features={['App web a medida', 'Panel de administración', 'Integraciones / API', 'Soporte prioritario 6 meses']} cta="Agendar llamada" />
          <PricingCard name="A medida" price="Custom" period="" description="Proyectos complejos y automatización."
            features={['Alcance definido contigo', 'Automatizaciones de procesos', 'Equipo dedicado', 'SLA garantizado']} cta="Contáctanos" />
        </div>
      </div>
    </section>
  );
}

window.PricingSection = PricingSection;
