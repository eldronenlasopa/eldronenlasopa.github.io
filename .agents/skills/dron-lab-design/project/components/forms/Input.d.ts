import React from 'react';

/**
 * Labeled text field with hint/error and optional left icon.
 * @startingPoint section="Forms" subtitle="Campos de formulario: input, textarea, select" viewport="700x260"
 */
export interface InputProps {
  label?: string;
  hint?: string;
  /** Error message; replaces hint and turns the field red. */
  error?: string;
  id?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  iconLeft?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
