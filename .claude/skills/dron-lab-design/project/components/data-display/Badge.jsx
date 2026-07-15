import React from 'react';

/**
 * Badge — small status pill. Tones map to semantic colors.
 */
export function Badge({ children, tone = 'neutral', dot = false, style = {} }) {
  const tones = {
    neutral: { bg: 'var(--ink-100)', fg: 'var(--text-body)' },
    brand:   { bg: 'rgba(255,107,53,0.14)', fg: 'var(--brand-orange-600)' },
    success: { bg: 'var(--success-tint)', fg: 'var(--success)' },
    warning: { bg: 'var(--warning-tint)', fg: 'var(--brand-yellow-600)' },
    danger:  { bg: 'var(--danger-tint)', fg: 'var(--danger)' },
    info:    { bg: 'var(--info-tint)', fg: 'var(--info)' },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 10px',
      fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 'var(--fw-medium)',
      letterSpacing: '0.02em',
      background: t.bg, color: t.fg,
      borderRadius: 'var(--radius-pill)',
      ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.fg }} />}
      {children}
    </span>
  );
}
