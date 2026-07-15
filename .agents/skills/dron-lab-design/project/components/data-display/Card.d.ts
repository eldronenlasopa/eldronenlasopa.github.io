import React from 'react';

export type CardElevation = 'none' | 'sm' | 'md' | 'lg';

/**
 * Surface container with rounded corners and soft shadow.
 * @startingPoint section="Data display" subtitle="Contenedor de superficie con elevación y acento" viewport="700x260"
 */
export interface CardProps {
  children: React.ReactNode;
  elevation?: CardElevation;
  /** Adds hover lift. @default false */
  interactive?: boolean;
  /** Top orange accent bar. @default false */
  accent?: boolean;
  /** Frosted glass panel for dark surfaces (cyan glow). @default false */
  glass?: boolean;
  padding?: string | number;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
