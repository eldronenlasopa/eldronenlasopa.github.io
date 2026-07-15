import React from 'react';

/** Selectable/removable chip for tech stacks, filters and categories. */
export interface TagProps {
  children: React.ReactNode;
  /** Filled orange when true. @default false */
  selected?: boolean;
  /** Shows an ✕; called when clicked. */
  onRemove?: () => void;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
