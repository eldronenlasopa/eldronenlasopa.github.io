const { Card } = window.ElDronEnLaSopaDesignSystem_5a2264;

const SERVICES = [
  { icon: '◆', title: 'Aplicaciones web', body: 'Plataformas y paneles a medida, del MVP a producción, con la escala que tu operación necesita.' },
  { icon: '▲', title: 'Páginas & landings', body: 'Sitios rápidos y bien posicionados que convierten visitas en clientes.' },
  { icon: '⬡', title: 'Automatizaciones', body: 'Conectamos tus herramientas y eliminamos el trabajo manual repetitivo.' },
  { icon: '⬢', title: 'Integraciones / API', body: 'Unimos tus sistemas: pagos, CRMs, ERPs y servicios de terceros.' },
];

function ServicesSection() {
  return (
    <section id="servicios" style={{ background: 'var(--surface-page)', padding: '96px 32px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--brand-orange-600)', marginBottom: 14 }}>// Qué hacemos</div>
        <h2 style={{ margin: '0 0 48px', fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 'var(--fw-bold)', letterSpacing: 'var(--ls-tight)', color: 'var(--text-strong)', maxWidth: 640, lineHeight: 'var(--lh-heading)' }}>
          Un socio tecnológico, no solo un proveedor
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {SERVICES.map((s) => (
            <Card key={s.title} elevation="sm" interactive accent>
              <div style={{ fontSize: 26, color: 'var(--brand-orange)', marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 'var(--lh-body)', color: 'var(--text-muted)' }}>{s.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ServicesSection = ServicesSection;
