import React from 'react';

/**
 * Wordmark — typographic brand lockup for El Dron en la Sopa.
 * NOTE: no official logo file was provided, so the brand is rendered in type.
 * Three variants are offered as logo alternatives — pick one as the brand mark:
 *   - "brackets"  : { el dron en la sopa }  — code brackets, drone hovering (original)
 *   - "monogram"  : ⊹ DRON  — a HUD/scope glyph + condensed uppercase (most futuristic)
 *   - "terminal"  : ~/dron ▮  — command-line prompt with blinking cursor
 */
export function Wordmark({ size = 'md', tone = 'dark', variant = 'terminal', style = {} }) {
  const scale = { sm: 16, md: 22, lg: 34 }[size] || 22;
  const color = tone === 'light' ? 'var(--text-on-inverse)' : 'var(--text-strong)';
  const accent = 'var(--brand-orange)';
  const cyan = 'var(--brand-cyan)';
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: '0.34em',
    fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)',
    fontSize: scale, letterSpacing: 'var(--ls-heading)', color,
    lineHeight: 1, whiteSpace: 'nowrap', ...style,
  };
  const mono = { fontFamily: 'var(--font-mono)', color: accent, fontSize: '0.9em', fontWeight: 'var(--fw-semibold)' };

  if (variant === 'monogram') {
    return (
      <span style={{ ...base, gap: '0.5em', letterSpacing: '0.02em' }}>
        <span aria-hidden="true" style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: '1.5em', height: '1.5em', borderRadius: 'var(--radius-sm)',
          background: 'var(--gradient-hud)', color: 'var(--ink-950)',
          fontSize: '0.82em', boxShadow: 'var(--glow-soft-cyan)',
        }}>⊹</span>
        <span>DRON<span style={{ color: cyan }}>·</span>SOPA</span>
      </span>
    );
  }

  if (variant === 'terminal') {
    return (
      <span style={{ ...base, fontFamily: 'var(--font-mono)', gap: '0.15em', letterSpacing: 0 }}>
        <span style={{ color: cyan }}>~/</span>
        <span>dronlab</span>
        <span aria-hidden="true" style={{
          width: '0.55em', height: '1.05em', background: accent, marginLeft: '0.15em',
          display: 'inline-block', borderRadius: 1,
          animation: 'dron-cursor 1s steps(2, start) infinite',
        }} />
        <style>{`@keyframes dron-cursor{0%,100%{opacity:1}50%{opacity:0}}`}</style>
      </span>
    );
  }

  // default: brackets
  return (
    <span style={{ ...base, alignItems: 'baseline' }}>
      <span aria-hidden="true" style={mono}>{'{'}</span>
      el dron en la
      <span style={{ color: accent }}>sopa</span>
      <span aria-hidden="true" style={mono}>{'}'}</span>
    </span>
  );
}
