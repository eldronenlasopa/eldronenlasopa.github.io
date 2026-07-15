import React from 'react';

/** Textarea — multi-line text field with the same label/hint/error contract as Input. */
export function Textarea({
  label, hint, error, id, value, placeholder, rows = 4,
  disabled = false, required = false, onChange, style = {}, ...rest
}) {
  const fieldId = id || (label ? `ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--danger)' : 'var(--border-default)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)',
        }}>
          {label}{required && <span style={{ color: 'var(--danger)' }}> *</span>}
        </label>
      )}
      <textarea
        id={fieldId} value={value} placeholder={placeholder} rows={rows}
        disabled={disabled} required={required} onChange={onChange}
        style={{
          width: '100%', boxSizing: 'border-box', padding: '12px 14px',
          fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 'var(--lh-body)',
          color: 'var(--text-body)', background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
          border: `1.5px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
          outline: 'none', resize: 'vertical',
          transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = error ? 'var(--danger)' : 'var(--border-focus)';
          e.currentTarget.style.boxShadow = `0 0 0 4px ${error ? 'var(--danger-tint)' : 'var(--focus-ring)'}`;
        }}
        onBlur={(e) => { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.boxShadow = 'none'; }}
        {...rest}
      />
      {(hint || error) && (
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: error ? 'var(--danger)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
