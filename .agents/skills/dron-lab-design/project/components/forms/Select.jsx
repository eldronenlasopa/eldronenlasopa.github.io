import React from 'react';

/** Select — labeled dropdown. Pass `options` as [{value,label}] or string[]. */
export function Select({
  label, hint, error, id, value, options = [], placeholder = 'Selecciona…',
  disabled = false, required = false, onChange, style = {}, ...rest
}) {
  const fieldId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--danger)' : 'var(--border-default)';
  const opts = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)',
        }}>
          {label}{required && <span style={{ color: 'var(--danger)' }}> *</span>}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        <select
          id={fieldId} value={value} disabled={disabled} required={required} onChange={onChange}
          style={{
            width: '100%', boxSizing: 'border-box', padding: '12px 40px 12px 14px',
            fontFamily: 'var(--font-body)', fontSize: 15, color: value ? 'var(--text-body)' : 'var(--text-faint)',
            background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
            border: `1.5px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
            outline: 'none', appearance: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
            transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = error ? 'var(--danger)' : 'var(--border-focus)';
            e.currentTarget.style.boxShadow = `0 0 0 4px ${error ? 'var(--danger-tint)' : 'var(--focus-ring)'}`;
          }}
          onBlur={(e) => { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.boxShadow = 'none'; }}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {opts.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <span style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)', fontSize: 12 }}>▾</span>
      </div>
      {(hint || error) && (
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: error ? 'var(--danger)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
