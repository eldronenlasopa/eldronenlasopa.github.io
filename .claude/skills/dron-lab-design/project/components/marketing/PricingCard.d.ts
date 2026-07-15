import React from 'react';

/**
 * A single plan in a pricing grid. Set `featured` for the recommended (dark) plan.
 * @startingPoint section="Marketing" subtitle="Tarjeta de plan/precio para grillas de planes" viewport="700x460"
 */
export interface PricingCardProps {
  name: string;
  /** e.g. "S/ 1,200" or "A medida" */
  price: string;
  /** @default "/mes" */
  period?: string;
  description?: string;
  features?: string[];
  cta?: string;
  /** Highlights as the recommended plan (dark, scaled up). @default false */
  featured?: boolean;
  badge?: string;
  onCta?: () => void;
  style?: React.CSSProperties;
}
export function PricingCard(props: PricingCardProps): JSX.Element;
