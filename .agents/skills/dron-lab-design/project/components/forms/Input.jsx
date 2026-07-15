import React from 'react';

/**
 * Input — labeled text field. Supports label, hint, error, and left/right adornments.
 */
export function Input({
  label,
  hint,
  error,
  id,
  type = 'text',
  value,
  placeholder,
  disabled = false,
  required = false,
  iconLeft = null,
  onChange,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--danger)' : 'var(--border-default)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 'var(--fw-semibold)',
          color: 'var(--text-strong)',
        }}>
          {label}{required && <span style={{ color: 'var(--danger)' }}> *</span>}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {iconLeft && (
          <span style={{ position: 'absolute', left: 14, display: 'inline-flex', color: 'var(--text-faint)' }}>{iconLeft}</span>
        )}
        <input
          id={fieldId}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={onChange}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: iconLeft ? '12px 14px 12px 40px' : '12px 14px',
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            color: 'var(--text-body)',
            background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
            border: `1.5px solid ${borderColor}`,
            borderRadius: 'var(--radius-md)',
            outline: 'none',
            transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = error ? 'var(--danger)' : 'var(--border-focus)';
            e.currentTarget.style.boxShadow = `0 0 0 4px ${error ? 'var(--danger-tint)' : 'var(--focus-ring)'}`;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = borderColor;
            e.currentTarget.style.boxShadow = 'none';
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: error ? 'var(--danger)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
