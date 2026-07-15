import React from 'react';

/** Toast tone → semantic color mapping. */
export type ToastTone = 'success' | 'warning' | 'error' | 'info';

export interface ToastProps {
  /** Semantic tone; sets accent color, icon and eyebrow label. */
  tone?: ToastTone;
  /** Bold headline line. */
  title?: string;
  /** Optional supporting message. */
  children?: React.ReactNode;
  /** Auto-dismiss after ms. 0 disables auto-dismiss and the countdown bar. */
  duration?: number;
  /** Called after the toast finishes its leave animation. */
  onClose?: () => void;
  style?: React.CSSProperties;
}
export function Toast(props: ToastProps): JSX.Element;

export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface ToastStackProps {
  position?: ToastPosition;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function ToastStack(props: ToastStackProps): JSX.Element;
