import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'inverse';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Primary action control. Use `primary` (orange) for the main CTA on a view,
 * `secondary` (yellow) for a warm alternate, `outline`/`ghost` for lower emphasis,
 * `inverse` on dark surfaces.
 *
 * @startingPoint section="Actions" subtitle="Botones en todas sus variantes y tamaños" viewport="700x180"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual emphasis. @default "primary" */
  variant?: ButtonVariant;
  /** @default "md" */
  size?: ButtonSize;
  /** Stretch to container width. @default false */
  fullWidth?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
