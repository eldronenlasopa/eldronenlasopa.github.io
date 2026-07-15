import React from 'react';

/**
 * Tag — removable/selectable label chip (tech stack, filters, categories).
 */
export function Tag({ children, selected = false, onRemove, onClick, style = {} }) {
  return (
    <span
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '6px 12px',
        fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 'var(--fw-medium)',
        color: selected ? 'var(--text-on-brand)' : 'var(--text-body)',
        background: selected ? 'var(--accent-primary)' : 'var(--surface-card)',
        border: `1px solid ${selected ? 'transparent' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-sm)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
        ...style,
      }}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          aria-label="Quitar"
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          style={{
            border: 'none', background: 'none', cursor: 'pointer', padding: 0,
            color: 'inherit', opacity: 0.6, fontSize: 14, lineHeight: 1,
          }}
        >✕</button>
      )}
    </span>
  );
}
