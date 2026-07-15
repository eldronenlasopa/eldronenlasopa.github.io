import { Component, computed, inject, input } from '@angular/core';
import { Toast } from './toast';
import { ToastService } from '../../../core/services/toast.service';

export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

const POSITION_CLASSES: Record<ToastPosition, string> = {
  'top-right': 'top-[clamp(16px,3vw,24px)] right-[clamp(16px,3vw,24px)] items-end',
  'top-left': 'top-[clamp(16px,3vw,24px)] left-[clamp(16px,3vw,24px)] items-start',
  'bottom-right': 'bottom-[clamp(16px,3vw,24px)] right-[clamp(16px,3vw,24px)] items-end',
  'bottom-left': 'bottom-[clamp(16px,3vw,24px)] left-[clamp(16px,3vw,24px)] items-start',
};

/** Contenedor fijo de toasts, alimentado por ToastService. Montar una sola vez en app root. */
@Component({
  selector: 'app-toast-stack',
  imports: [Toast],
  templateUrl: './toast-stack.html',
})
export class ToastStack {
  readonly position = input<ToastPosition>('top-right');
  protected readonly toastService = inject(ToastService);

  readonly stackClasses = computed(() =>
    ['pointer-events-none fixed z-[1000] flex flex-col gap-3', POSITION_CLASSES[this.position()]].join(' '),
  );
}
