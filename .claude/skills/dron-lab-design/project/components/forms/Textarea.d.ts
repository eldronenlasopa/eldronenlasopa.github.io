import React from 'react';

/** Multi-line text field. Same label/hint/error contract as Input. */
export interface TextareaProps {
  label?: string;
  hint?: string;
  error?: string;
  id?: string;
  value?: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
}
export function Textarea(props: TextareaProps): JSX.Element;
