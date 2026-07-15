import React from 'react';

/**
 * IconButton — square/circular button for a single icon glyph.
 */
export function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const dims = { sm: 34, md: 42, lg: 50 }[size] || 42;
  const variants = {
    solid: { background: 'var(--accent-primary)', color: 'var(--text-on-brand)', border: '1px solid transparent' },
    ghost: { background: 'transparent', color: 'var(--text-body)', border: '1px solid transparent' },
    outline: { background: 'var(--surface-card)', color: 'var(--text-strong)', border: '1px solid var(--border-default)' },
  };
  const v = variants[variant] || variants.ghost;
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      style={{
        width: dims,
        height: dims,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'background var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
        ...v,
        ...style,
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.filter = 'brightness(0.92)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.92)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'none'; }}
      {...rest}
    >
      {children}
    </button>
  );
}
