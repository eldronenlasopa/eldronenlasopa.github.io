import React from 'react';

/**
 * Card — surface container. `elevation` controls shadow; `interactive` adds hover lift.
 * `accent` shows a top orange bar (feature cards). `glass` = frosted panel for dark surfaces.
 */
export function Card({
  children,
  elevation = 'sm',
  interactive = false,
  accent = false,
  glass = false,
  padding = 'var(--space-6)',
  style = {},
  ...rest
}) {
  const shadow = { none: 'none', sm: 'var(--shadow-sm)', md: 'var(--shadow-md)', lg: 'var(--shadow-lg)' }[elevation] || 'var(--shadow-sm)';
  const surface = glass
    ? { background: 'var(--glass-dark)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(var(--blur-glass))', WebkitBackdropFilter: 'blur(var(--blur-glass))', boxShadow: 'var(--glow-soft-cyan)', color: 'var(--text-on-inverse)' }
    : { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: shadow };
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        padding,
        overflow: 'hidden',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        ...surface,
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!interactive) return;
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = glass ? 'var(--glow-cyan)' : 'var(--shadow-lg)';
      }}
      onMouseLeave={(e) => {
        if (!interactive) return;
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = glass ? 'var(--glow-soft-cyan)' : shadow;
      }}
      {...rest}
    >
      {accent && (
        <span style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--accent-primary)' }} />
      )}
      {children}
    </div>
  );
}
