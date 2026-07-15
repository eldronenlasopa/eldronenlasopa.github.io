import React from 'react';

export interface HeaderLink { label: string; href: string; }

/**
 * Marketing site top navigation: wordmark, links, CTA. Glassy on light, solid on dark.
 * @startingPoint section="Navigation" subtitle="Header de sitio con nav y CTA" viewport="1000x76"
 */
export interface HeaderProps {
  links?: HeaderLink[];
  cta?: string;
  onCta?: () => void;
  /** Dark variant for hero overlays. @default false */
  inverse?: boolean;
  style?: React.CSSProperties;
}
export function Header(props: HeaderProps): JSX.Element;
