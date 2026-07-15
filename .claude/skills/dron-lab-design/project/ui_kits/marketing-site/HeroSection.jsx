const { Button } = window.ElDronEnLaSopaDesignSystem_5a2264;

function HeroSection() {
  return (
    <section style={{
      background: 'var(--gradient-ink)',
      color: 'var(--text-on-inverse)',
      padding: '104px 32px 118px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* grid texture */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'var(--texture-grid)', backgroundSize: 'var(--texture-grid-size)', opacity: 0.5, maskImage: 'radial-gradient(circle at 70% 30%, #000 0%, transparent 75%)', WebkitMaskImage: 'radial-gradient(circle at 70% 30%, #000 0%, transparent 75%)', pointerEvents: 'none' }} />
      {/* neon glows */}
      <div style={{ position: 'absolute', top: -140, right: -80, width: 500, height: 500, background: 'radial-gradient(circle, rgba(255,107,53,0.28), transparent 66%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -180, left: -120, width: 480, height: 480, background: 'radial-gradient(circle, rgba(34,211,238,0.20), transparent 68%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', position: 'relative' }}>
        <div style={{ maxWidth: 780 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--brand-cyan)', marginBottom: 22, border: '1px solid var(--glass-border)', background: 'var(--glass-dark)', backdropFilter: 'blur(8px)', padding: '7px 14px', borderRadius: 'var(--radius-pill)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--brand-cyan)', boxShadow: '0 0 10px var(--brand-cyan)' }} />
            Soluciones informáticas a medida
          </div>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 74, fontWeight: 'var(--fw-bold)', lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--ls-tight)' }}>
            Software que hace<br /><span style={{ background: 'var(--text-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>crecer tu empresa</span>
          </h1>
          <p style={{ margin: '26px 0 0', fontSize: 20, lineHeight: 'var(--lh-snug)', color: 'var(--text-inverse-muted)', maxWidth: 560 }}>
            Diseñamos y construimos aplicaciones web, páginas y automatizaciones. Del prototipo a producción, con comunicación cercana en cada paso.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" iconRight={<span>→</span>}>Solicitar propuesta</Button>
            <Button variant="inverse" size="lg">Ver proyectos</Button>
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 44, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase' }}>stack</span>
            {['React', 'Node.js', 'Python', 'PostgreSQL', 'n8n', 'AWS'].map((t) => (
              <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--brand-cyan-300)', border: '1px solid var(--glass-border)', background: 'var(--glass-dark)', backdropFilter: 'blur(6px)', padding: '6px 12px', borderRadius: 'var(--radius-pill)' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.HeroSection = HeroSection;
