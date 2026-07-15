import React from 'react';

/**
 * Composed lead-capture form (name, email, service select, message, submit).
 * @startingPoint section="Forms" subtitle="Formulario de contacto listo para usar" viewport="540x620"
 */
export interface ContactFormProps {
  title?: string;
  subtitle?: string;
  onSubmit?: () => void;
  style?: React.CSSProperties;
}
export function ContactForm(props: ContactFormProps): JSX.Element;
