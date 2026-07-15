const { Header, Footer, Button, Card, Badge, Tag, ContactForm } = window.ElDronEnLaSopaDesignSystem_5a2264;

const STEPS = [
  { n: '01', t: 'Diagnóstico', d: 'Mapeamos tus procesos actuales y detectamos el trabajo manual que se puede automatizar.' },
  { n: '02', t: 'Diseño del flujo', d: 'Definimos disparadores, integraciones y reglas. Te mostramos el flujo antes de construir.' },
  { n: '03', t: 'Implementación', d: 'Conectamos tus herramientas y probamos con datos reales, sin interrumpir tu operación.' },
  { n: '04', t: 'Soporte', d: 'Monitoreamos, ajustamos y te capacitamos. La automatización crece con tu empresa.' },
];

const BENEFITS = [
  { t: 'Menos errores', d: 'Elimina la copia manual entre sistemas y los datos inconsistentes.' },
  { t: 'Más tiempo', d: 'Tu equipo deja las tareas repetitivas y se enfoca en lo importante.' },
  { t: 'Escala sin fricción', d: 'Los procesos aguantan más volumen sin contratar más personal.' },
];

function ServicesLandingApp() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: 'var(--surface-page)' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 50 }}>
        <Header cta="Agendar diagnóstico" />
      </div>

      {/* Hero */}
      <section style={{ background: 'var(--surface-inverse)', color: 'var(--text-on-inverse)', padding: '90px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: -140, left: -60, width: 420, height: 420, background: 'radial-gradient(circle, rgba(247,201,72,0.16), transparent 70%)' }} />
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'center' }}>
          <div>
            <span style={{ display: 'inline-block', marginBottom: 20 }}><Badge tone="brand">Servicio</Badge></span>
            <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 60, fontWeight: 'var(--fw-bold)', lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--ls-tight)' }}>
              Automatiza lo <span style={{ color: 'var(--brand-orange)' }}>repetitivo</span>
            </h1>
            <p style={{ margin: '24px 0 0', fontSize: 19, lineHeight: 'var(--lh-snug)', color: 'var(--text-inverse-muted)', maxWidth: 480 }}>
              Conectamos tus herramientas y dejamos que el software haga el trabajo manual. Facturas, reportes, avisos y más — en piloto automático.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" iconRight={<span>→</span>}>Agendar diagnóstico</Button>
              <Button variant="inverse" size="lg">Ver casos</Button>
            </div>
          </div>
          <Card glass>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--brand-cyan)', marginBottom: 14 }}>// flujo_facturacion.n8n</div>
            {['Nueva venta en la tienda', 'Generar factura electrónica', 'Enviar por correo al cliente', 'Registrar en hoja de cálculo', 'Avisar al equipo en Slack'].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0' }}>
                <span style={{ width: 26, height: 26, borderRadius: 'var(--radius-sm)', background: 'var(--brand-orange)', color: 'var(--text-on-brand)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                <span style={{ fontSize: 14.5, color: 'var(--text-on-inverse)' }}>{s}</span>
              </div>
            ))}
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '90px 32px', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {BENEFITS.map((b) => (
            <Card key={b.t} elevation="sm" interactive accent>
              <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>{b.t}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 'var(--lh-body)', color: 'var(--text-muted)' }}>{b.d}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section style={{ background: 'var(--surface-card)', padding: '90px 32px', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--brand-orange-600)', marginBottom: 14 }}>// Cómo trabajamos</div>
          <h2 style={{ margin: '0 0 48px', fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 'var(--fw-bold)', letterSpacing: 'var(--ls-tight)', color: 'var(--text-strong)' }}>Cuatro pasos, cero drama</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {STEPS.map((s) => (
              <div key={s.n}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 'var(--fw-bold)', color: 'var(--brand-orange)', letterSpacing: 'var(--ls-tight)' }}>{s.n}</div>
                <div style={{ height: 3, width: 40, background: 'var(--brand-yellow)', margin: '10px 0 16px', borderRadius: 'var(--radius-pill)' }} />
                <h4 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>{s.t}</h4>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 'var(--lh-body)', color: 'var(--text-muted)' }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + form */}
      <section style={{ padding: '90px 32px', maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <h2 style={{ margin: '0 0 16px', fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 'var(--fw-bold)', letterSpacing: 'var(--ls-tight)', color: 'var(--text-strong)', lineHeight: 'var(--lh-heading)' }}>
            ¿Qué proceso te quita más tiempo?
          </h2>
          <p style={{ margin: '0 0 24px', fontSize: 17, lineHeight: 'var(--lh-body)', color: 'var(--text-muted)', maxWidth: 420 }}>
            Cuéntanos y te devolvemos un diagnóstico con las automatizaciones de mayor impacto. Gratis y sin compromiso.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Facturación', 'Reportes', 'Onboarding', 'Inventario', 'Correos'].map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        </div>
        <ContactForm title="Agenda tu diagnóstico" subtitle="Te contactamos hoy mismo." style={{ justifySelf: 'end' }} />
      </section>

      <Footer />
    </div>
  );
}

window.ServicesLandingApp = ServicesLandingApp;
