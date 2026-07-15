import React from 'react';

export type DialogTone = 'brand' | 'success' | 'warning' | 'danger' | 'info';

/** Modal dialog for confirmations. Controlled via `open`. */
export interface DialogProps {
  open?: boolean;
  /** Tone sets the accent bar, glow and icon; `danger` also reddens confirm. */
  tone?: DialogTone;
  title?: string;
  children?: React.ReactNode;
  confirmLabel?: string;
  /** Pass empty string to hide the cancel button. */
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  style?: React.CSSProperties;
}
export function Dialog(props: DialogProps): JSX.Element | null;
