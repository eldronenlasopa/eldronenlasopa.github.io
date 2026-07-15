import React from 'react';
import { Wordmark } from '../brand/Wordmark.jsx';
import { Button } from '../actions/Button.jsx';

/**
 * Header — marketing site top navigation. Sticky, links + CTA.
 */
export function Header({
  links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Planes', href: '#planes' },
    { label: 'Nosotros', href: '#nosotros' },
  ],
  cta = 'Solicitar propuesta',
  onCta,
  inverse = false,
  style = {},
}) {
  const textColor = inverse ? 'var(--text-on-inverse)' : 'var(--text-body)';
  return (
    <header style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 32px',
      background: inverse ? 'var(--surface-inverse)' : 'rgba(255,255,255,0.86)',
      backdropFilter: 'saturate(180%) blur(var(--blur-glass))',
      borderBottom: `1px solid ${inverse ? 'var(--border-inverse)' : 'var(--border-subtle)'}`,
      ...style,
    }}>
      <Wordmark tone={inverse ? 'light' : 'dark'} />
      <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        {links.map((l) => (
          <a key={l.label} href={l.href} style={{
            fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 'var(--fw-medium)',
            color: textColor, textDecoration: 'none',
            transition: 'color var(--dur-base) var(--ease-out)',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-orange)'}
          onMouseLeave={(e) => e.currentTarget.style.color = textColor}
          >{l.label}</a>
        ))}
      </nav>
      <Button variant={inverse ? 'primary' : 'primary'} size="sm" onClick={onCta}>{cta}</Button>
    </header>
  );
}
