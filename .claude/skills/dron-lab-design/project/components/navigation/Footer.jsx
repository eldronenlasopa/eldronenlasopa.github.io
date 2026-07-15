import React from 'react';
import { Wordmark } from '../brand/Wordmark.jsx';

/**
 * Footer — dark marketing footer with columns + fine print.
 */
export function Footer({ style = {} }) {
  const cols = [
    { title: 'Servicios', items: ['Aplicaciones web', 'Páginas & landings', 'Automatizaciones', 'Integraciones / API'] },
    { title: 'Empresa', items: ['Nosotros', 'Proyectos', 'Blog', 'Contacto'] },
    { title: 'Recursos', items: ['Soporte', 'Estado', 'Términos', 'Privacidad'] },
  ];
  const linkStyle = {
    display: 'block', fontFamily: 'var(--font-body)', fontSize: 14,
    color: 'var(--text-inverse-muted)', textDecoration: 'none', padding: '5px 0',
  };
  return (
    <footer style={{
      background: 'var(--surface-inverse)', color: 'var(--text-on-inverse)',
      padding: '64px 32px 28px', ...style,
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40,
      }}>
        <div>
          <Wordmark tone="light" />
          <p style={{
            margin: '16px 0 0', maxWidth: 260, fontFamily: 'var(--font-body)',
            fontSize: 14, lineHeight: 'var(--lh-body)', color: 'var(--text-inverse-muted)',
          }}>
            <strong style={{ color: 'var(--text-on-inverse)', fontWeight: 'var(--fw-semibold)' }}>El Dron en la Sopa</strong> — la tecnología está en todo, hasta en la sopa. Aplicaciones, páginas y automatizaciones a medida.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 style={{
              margin: '0 0 12px', fontFamily: 'var(--font-mono)', fontSize: 12,
              letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--brand-yellow)',
            }}>{c.title}</h4>
            {c.items.map((i) => (
              <a key={i} href="#" style={linkStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-inverse-muted)'}
              >{i}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '40px auto 0', paddingTop: 24,
        borderTop: '1px solid var(--border-inverse)',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)',
      }}>
        <span>© 2026 El Dron en la Sopa</span>
        <span>Hecho con café en Perú ☕</span>
      </div>
    </footer>
  );
}
