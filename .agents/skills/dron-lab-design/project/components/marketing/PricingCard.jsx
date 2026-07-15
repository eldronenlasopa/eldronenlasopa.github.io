import React from 'react';
import { Button } from '../actions/Button.jsx';
import { Badge } from '../data-display/Badge.jsx';

/**
 * PricingCard — a single plan in a pricing grid. `featured` highlights the recommended plan.
 */
export function PricingCard({
  name,
  price,
  period = '/mes',
  description,
  features = [],
  cta = 'Empezar',
  featured = false,
  badge,
  onCta,
  style = {},
}) {
  return (
    <div style={{
      position: 'relative',
      display: 'flex', flexDirection: 'column', gap: 'var(--space-5)',
      background: featured ? 'var(--surface-inverse)' : 'var(--surface-card)',
      color: featured ? 'var(--text-on-inverse)' : 'var(--text-body)',
      border: `1px solid ${featured ? 'transparent' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-xl)',
      boxShadow: featured ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      padding: 'var(--space-8)',
      width: 300, boxSizing: 'border-box',
      transform: featured ? 'scale(1.03)' : 'none',
      ...style,
    }}>
      {(badge || featured) && (
        <span style={{ position: 'absolute', top: 20, right: 20 }}>
          <Badge tone={featured ? 'brand' : 'neutral'}>{badge || 'Recomendado'}</Badge>
        </span>
      )}
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: featured ? 'var(--brand-yellow)' : 'var(--text-muted)' }}>{name}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 10 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 46, fontWeight: 'var(--fw-bold)', letterSpacing: 'var(--ls-tight)', color: featured ? 'var(--white)' : 'var(--text-strong)' }}>{price}</span>
          <span style={{ fontSize: 15, color: featured ? 'var(--text-inverse-muted)' : 'var(--text-muted)' }}>{period}</span>
        </div>
        {description && <p style={{ margin: '10px 0 0', fontSize: 14, lineHeight: 'var(--lh-snug)', color: featured ? 'var(--text-inverse-muted)' : 'var(--text-muted)' }}>{description}</p>}
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, lineHeight: 'var(--lh-snug)' }}>
            <span style={{ color: 'var(--brand-orange)', fontWeight: 'var(--fw-bold)', flexShrink: 0 }}>✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 'auto', paddingTop: 'var(--space-2)' }}>
        <Button variant={featured ? 'primary' : 'outline'} fullWidth onClick={onCta}>{cta}</Button>
      </div>
    </div>
  );
}
