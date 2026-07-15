import React from 'react';

export type IconButtonVariant = 'solid' | 'ghost' | 'outline';
export type IconButtonSize = 'sm' | 'md' | 'lg';

/** Square/circular button holding a single icon glyph. Always pass `label` for a11y. */
export interface IconButtonProps {
  children: React.ReactNode;
  /** Accessible label (aria-label). */
  label: string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
