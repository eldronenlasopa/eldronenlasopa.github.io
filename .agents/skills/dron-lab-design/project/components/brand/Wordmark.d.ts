import React from 'react';

/**
 * Typographic brand lockup. No official logo file exists, so the brand renders in type.
 * @startingPoint section="Brand" subtitle="Lockup tipográfico de la marca" viewport="700x140"
 */
export interface WordmarkProps {
  size?: 'sm' | 'md' | 'lg';
  /** Use "light" on dark surfaces. @default "dark" */
  tone?: 'dark' | 'light';
  /** Logo alternative: brackets | monogram | terminal (OFFICIAL default). @default "terminal" */
  variant?: 'brackets' | 'monogram' | 'terminal';
  style?: React.CSSProperties;
}
export function Wordmark(props: WordmarkProps): JSX.Element;
