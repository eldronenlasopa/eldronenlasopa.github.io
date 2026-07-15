import React from 'react';
import { Input } from './Input.jsx';
import { Textarea } from './Textarea.jsx';
import { Select } from './Select.jsx';
import { Button } from '../actions/Button.jsx';

/**
 * ContactForm — composed lead-capture form used across marketing surfaces.
 * Purely cosmetic here; wire `onSubmit` to your backend.
 */
export function ContactForm({
  title = '¿Hablamos de tu proyecto?',
  subtitle = 'Cuéntanos qué necesitas y te respondemos en menos de 24 horas.',
  onSubmit,
  style = {},
}) {
  const services = ['Aplicación web', 'Página / landing', 'Automatización', 'Integración / API', 'No estoy seguro'];
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSubmit && onSubmit(); }}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
        padding: 'var(--space-8)',
        display: 'flex', flexDirection: 'column', gap: 'var(--space-5)',
        maxWidth: 480, ...style,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 'var(--fw-bold)', letterSpacing: 'var(--ls-heading)', color: 'var(--text-strong)' }}>{title}</h3>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 'var(--lh-snug)', color: 'var(--text-muted)' }}>{subtitle}</p>
      </div>
      <Input label="Nombre" placeholder="Tu nombre" required />
      <Input label="Correo" type="email" placeholder="tucorreo@empresa.com" required />
      <Select label="¿Qué necesitas?" options={services} />
      <Textarea label="Cuéntanos más" placeholder="Objetivo, alcance, plazos…" rows={3} />
      <Button type="submit" variant="primary" size="lg" fullWidth>Enviar mensaje</Button>
    </form>
  );
}
