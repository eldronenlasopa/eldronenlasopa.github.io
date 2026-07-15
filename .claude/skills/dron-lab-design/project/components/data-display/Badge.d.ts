import React from 'react';

export type BadgeTone = 'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'info';

/** Small status pill in a mono typeface. */
export interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
  /** Leading status dot. @default false */
  dot?: boolean;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
