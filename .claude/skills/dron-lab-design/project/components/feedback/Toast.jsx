import React from 'react';

const TONES = {
  success: { color: 'var(--success)', label: 'Éxito', glyph: '✓' },
  warning: { color: 'var(--brand-yellow)', label: 'Aviso', glyph: '!' },
  error:   { color: 'var(--danger)', label: 'Error', glyph: '×' },
  info:    { color: 'var(--brand-cyan)', label: 'Info', glyph: 'i' },
};

/**
 * Toast — HUD-glass notification. Dark glass surface, neon tone accent,
 * glowing icon chip, mono eyebrow and an auto-countdown scanline.
 */
export function Toast({ tone = 'info', title, children, duration = 4000, onClose, style = {} }) {
  const t = TONES[tone] || TONES.info;
  const [leaving, setLeaving] = React.useState(false);

  const dismiss = React.useCallback(() => {
    setLeaving(true);
    setTimeout(() => onClose && onClose(), 240);
  }, [onClose]);

  React.useEffect(() => {
    if (!duration) return;
    const id = setTimeout(dismiss, duration);
    return () => clearTimeout(id);
  }, [duration, dismiss]);

  return (
    <div role="status" style={{
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'flex-start', gap: 14,
      width: 'min(380px, 92vw)', padding: '16px 16px 16px 18px',
      background: 'var(--glass-dark)', backdropFilter: 'blur(var(--blur-glass))',
      border: '1px solid var(--glass-border)', borderLeft: `3px solid ${t.color}`,
      borderRadius: 'var(--radius-lg)', color: 'var(--text-on-inverse)',
      boxShadow: `0 18px 44px -14px rgba(0,0,0,0.6), 0 0 22px -8px ${t.color}`,
      animation: `dl-toast-in var(--dur-base) var(--ease-out)`,
      opacity: leaving ? 0 : 1,
      transform: leaving ? 'translateX(16px)' : 'none',
      transition: 'opacity 240ms var(--ease-out), transform 240ms var(--ease-out)',
      ...style,
    }}>
      <style>{`
        @keyframes dl-toast-in { from { opacity: 0; transform: translateX(24px); } to { opacity: 1; transform: none; } }
        @keyframes dl-toast-bar { from { transform: scaleX(1); } to { transform: scaleX(0); } }
        @keyframes dl-ring-spin { to { transform: rotate(360deg); } }
      `}</style>
      <span style={{
        position: 'relative', flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
      }}>
        <span style={{
          position: 'absolute', inset: '-60%',
          background: `conic-gradient(from 0deg, transparent 0 66%, ${t.color} 82%, #fff 90%, transparent 100%)`,
          animation: 'dl-ring-spin 2.4s linear infinite',
        }} />
        <span style={{
          position: 'absolute', inset: 2, borderRadius: '50%',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 'var(--fw-bold)',
          color: 'var(--ink-950)', background: t.color, boxShadow: `0 0 14px -2px ${t.color}`,
        }}>{t.glyph}</span>
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: t.color, marginBottom: title ? 3 : 0 }}>{t.label}</div>
        {title && <div style={{ fontSize: 15, fontWeight: 'var(--fw-semibold)', color: 'var(--text-on-inverse)', lineHeight: 1.35 }}>{title}</div>}
        {children && <div style={{ fontSize: 13.5, color: 'var(--text-inverse-muted)', marginTop: 3, lineHeight: 'var(--lh-snug)' }}>{children}</div>}
      </div>
      <button onClick={dismiss} aria-label="Cerrar" style={{
        flexShrink: 0, width: 26, height: 26, cursor: 'pointer', border: 'none', background: 'transparent',
        color: 'var(--text-inverse-muted)', fontSize: 18, lineHeight: 1, borderRadius: 'var(--radius-sm)',
      }}>×</button>
      {duration ? (
        <span style={{
          position: 'absolute', left: 0, bottom: 0, height: 2, width: '100%',
          transformOrigin: 'left', background: t.color, boxShadow: `0 0 8px ${t.color}`,
          animation: `dl-toast-bar ${duration}ms linear forwards`,
        }} />
      ) : null}
    </div>
  );
}

/**
 * ToastStack — fixed container that positions a list of toasts.
 */
export function ToastStack({ position = 'top-right', children, style = {} }) {
  const [v, h] = position.split('-');
  return (
    <div style={{
      position: 'fixed', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: 12,
      top: v === 'top' ? 'clamp(16px, 3vw, 24px)' : 'auto',
      bottom: v === 'bottom' ? 'clamp(16px, 3vw, 24px)' : 'auto',
      right: h === 'right' ? 'clamp(16px, 3vw, 24px)' : 'auto',
      left: h === 'left' ? 'clamp(16px, 3vw, 24px)' : 'auto',
      alignItems: h === 'left' ? 'flex-start' : 'flex-end',
      ...style,
    }}>
      {children}
    </div>
  );
}
