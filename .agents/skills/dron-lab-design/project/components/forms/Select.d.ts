import React from 'react';

export type SelectOption = string | { value: string; label: string };

/** Labeled dropdown with custom chevron. Options accept string[] or {value,label}[]. */
export interface SelectProps {
  label?: string;
  hint?: string;
  error?: string;
  id?: string;
  value?: string;
  options?: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
}
export function Select(props: SelectProps): JSX.Element;
