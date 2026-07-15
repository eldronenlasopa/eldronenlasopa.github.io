import React from 'react';

/**
 * Button — primary action control for El Dron en la Sopa.
 * Variants: primary (orange), secondary (yellow), outline, ghost, inverse.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 14, gap: 6 },
    md: { padding: '12px 22px', fontSize: 15, gap: 8 },
    lg: { padding: '16px 30px', fontSize: 17, gap: 10 },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      background: 'var(--accent-primary)',
      color: 'var(--text-on-brand)',
      border: '2px solid transparent',
      boxShadow: 'var(--shadow-brand)',
    },
    secondary: {
      background: 'var(--accent-secondary)',
      color: 'var(--text-on-brand)',
      border: '2px solid transparent',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '2px solid var(--border-strong)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '2px solid transparent',
    },
    inverse: {
      background: 'var(--white)',
      color: 'var(--ink-950)',
      border: '2px solid transparent',
    },
  };
  const v = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        width: fullWidth ? '100%' : 'auto',
        padding: s.padding,
        fontFamily: 'var(--font-body)',
        fontSize: s.fontSize,
        fontWeight: 'var(--fw-bold)',
        lineHeight: 1,
        letterSpacing: '0.01em',
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur-base) var(--ease-out)',
        ...v,
        ...style,
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.filter = 'brightness(0.94)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.transform = 'none'; }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'none'; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
