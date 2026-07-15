import { Injectable, signal } from '@angular/core';
import type { ToastTone } from '../../ui/feedback/toast/toast';

export interface ToastOptions {
  tone?: ToastTone;
  title?: string;
  message?: string;
  /** ms; 0 = persistente (sin auto-cierre). */
  duration?: number;
}

export interface ActiveToast {
  id: number;
  tone: ToastTone;
  title: string;
  message: string;
  duration: number;
}

/**
 * API funcional de toasts. Inyectar y llamar:
 *   toast.success('Propuesta enviada');
 *   toast.error('Error', 'No se pudo guardar');
 *   toast.show({ tone: 'info', title: '...', duration: 0 });
 * Requiere `<app-toast-stack />` montado una sola vez (app root).
 */
@Injectable({ providedIn: 'root' })
export class ToastService {
  private nextId = 1;
  private readonly _toasts = signal<ActiveToast[]>([]);
  readonly toasts = this._toasts.asReadonly();

  show(options: ToastOptions = {}): number {
    const toast: ActiveToast = {
      id: this.nextId++,
      tone: options.tone ?? 'info',
      title: options.title ?? '',
      message: options.message ?? '',
      duration: options.duration ?? 4000,
    };
    this._toasts.update((list) => [...list, toast]);
    return toast.id;
  }

  success(title: string, message = '', duration?: number): number {
    return this.show({ tone: 'success', title, message, duration });
  }

  warning(title: string, message = '', duration?: number): number {
    return this.show({ tone: 'warning', title, message, duration });
  }

  error(title: string, message = '', duration?: number): number {
    return this.show({ tone: 'error', title, message, duration });
  }

  info(title: string, message = '', duration?: number): number {
    return this.show({ tone: 'info', title, message, duration });
  }

  dismiss(id: number): void {
    this._toasts.update((list) => list.filter((t) => t.id !== id));
  }

  clear(): void {
    this._toasts.set([]);
  }
}
