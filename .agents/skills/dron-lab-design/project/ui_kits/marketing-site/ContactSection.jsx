const { ContactForm } = window.ElDronEnLaSopaDesignSystem_5a2264;

function ContactSection() {
  return (
    <section id="contacto" style={{ background: 'var(--surface-inverse)', padding: '96px 32px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--brand-yellow)', marginBottom: 16 }}>// Contacto</div>
          <h2 style={{ margin: '0 0 18px', fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 'var(--fw-bold)', letterSpacing: 'var(--ls-tight)', color: 'var(--text-on-inverse)', lineHeight: 'var(--lh-heading)' }}>
            Cuéntanos tu idea. La convertimos en producto.
          </h2>
          <p style={{ margin: '0 0 28px', fontSize: 17, lineHeight: 'var(--lh-body)', color: 'var(--text-inverse-muted)', maxWidth: 440 }}>
            Respondemos en menos de 24 horas con una primera propuesta de alcance y presupuesto.
          </p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {['Diagnóstico gratuito', 'Presupuesto sin compromiso', 'Equipo local, comunicación en español'].map((f) => (
              <li key={f} style={{ display: 'flex', gap: 12, alignItems: 'center', color: 'var(--text-on-inverse)', fontSize: 15.5 }}>
                <span style={{ color: 'var(--brand-orange)', fontWeight: 'var(--fw-bold)' }}>✓</span>{f}
              </li>
            ))}
          </ul>
        </div>
        <ContactForm style={{ justifySelf: 'end' }} />
      </div>
    </section>
  );
}

window.ContactSection = ContactSection;
