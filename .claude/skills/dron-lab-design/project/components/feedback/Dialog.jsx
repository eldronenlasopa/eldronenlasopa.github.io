import React from 'react';
import { Button } from '../actions/Button.jsx';

const TONES = {
  brand:   { color: 'var(--brand-orange)', glyph: '◆' },
  success: { color: 'var(--success)', glyph: '✓' },
  warning: { color: 'var(--brand-yellow)', glyph: '!' },
  danger:  { color: 'var(--danger)', glyph: '×' },
  info:    { color: 'var(--brand-cyan)', glyph: 'i' },
};

/**
 * Dialog — HUD modal for confirmations. Grid-textured blurred overlay,
 * glass panel with a neon tone bar + glow, icon chip and action row.
 */
export function Dialog({
  open = true,
  tone = 'brand',
  title,
  children,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  onConfirm,
  onCancel,
  style = {},
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape' && onCancel) onCancel(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onCancel]);

  if (!open) return null;
  const t = TONES[tone] || TONES.brand;
  const danger = tone === 'danger';

  return (
    <div
      onMouseDown={(e) => { if (e.target === e.currentTarget && onCancel) onCancel(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
        background: 'rgba(6,9,18,0.62)', backdropFilter: 'blur(6px)',
        backgroundImage: 'var(--texture-grid)', backgroundSize: 'var(--texture-grid-size)',
        animation: 'dl-dialog-overlay var(--dur-base) var(--ease-out)',
      }}>
      <style>{`
        @keyframes dl-dialog-overlay { from { opacity: 0; } to { opacity: 1; } }
        @keyframes dl-dialog-panel { from { opacity: 0; transform: translateY(16px) scale(0.97); } to { opacity: 1; transform: none; } }
        @keyframes dl-dialog-ring { to { transform: rotate(360deg); } }
      `}</style>
      <div role="dialog" aria-modal="true" style={{
        position: 'relative', overflow: 'hidden',
        width: 'min(440px, 100%)', padding: '30px 28px 24px',
        background: 'var(--gradient-ink)', color: 'var(--text-on-inverse)',
        border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-xl)',
        boxShadow: `0 30px 80px -20px rgba(0,0,0,0.7), 0 0 40px -16px ${t.color}`,
        animation: 'dl-dialog-panel var(--dur-base) var(--ease-out)',
        ...style,
      }}>
        {/* top neon bar */}
        <span style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: t.color, boxShadow: `0 0 16px ${t.color}` }} />
        {/* corner glow */}
        <div style={{ position: 'absolute', top: -80, right: -40, width: 220, height: 220, background: `radial-gradient(circle, ${t.color}33, transparent 66%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <span style={{
            position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 48, height: 48, borderRadius: 'var(--radius-md)', marginBottom: 18, overflow: 'hidden',
          }}>
            <span style={{
              position: 'absolute', inset: '-60%',
              background: `conic-gradient(from 0deg, transparent 0 62%, ${t.color} 80%, #fff 90%, transparent 100%)`,
              animation: 'dl-dialog-ring 2.8s linear infinite',
            }} />
            <span style={{
              position: 'absolute', inset: 1.5, borderRadius: 'calc(var(--radius-md) - 1px)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-mono)', fontSize: 22, fontWeight: 'var(--fw-bold)',
              color: t.color, background: 'var(--ink-900)',
              boxShadow: `inset 0 0 18px -6px ${t.color}`,
            }}>{t.glyph}</span>
          </span>
          {title && <h2 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 'var(--fw-bold)', letterSpacing: 'var(--ls-tight)', color: 'var(--text-on-inverse)' }}>{title}</h2>}
          {children && <div style={{ fontSize: 15, lineHeight: 'var(--lh-body)', color: 'var(--text-inverse-muted)' }}>{children}</div>}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 28 }}>
            {cancelLabel && (
              <Button variant="inverse" size="sm" onClick={onCancel}
                style={{ background: 'var(--glass-dark)', color: 'var(--text-on-inverse)', border: '1px solid var(--glass-border)' }}>
                {cancelLabel}
              </Button>
            )}
            <Button variant="primary" size="sm" onClick={onConfirm}
              style={danger ? { background: 'var(--danger)', color: 'var(--white)', boxShadow: '0 0 20px -6px var(--danger)' } : undefined}>
              {confirmLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
