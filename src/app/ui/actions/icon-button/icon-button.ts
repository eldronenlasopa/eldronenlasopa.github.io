import { Component, computed, input, output } from '@angular/core';

export type IconButtonVariant = 'solid' | 'ghost' | 'outline';
export type IconButtonSize = 'sm' | 'md' | 'lg';

const SIZE_CLASSES: Record<IconButtonSize, string> = {
  sm: 'w-[34px] h-[34px]',
  md: 'w-[42px] h-[42px]',
  lg: 'w-[50px] h-[50px]',
};

const VARIANT_CLASSES: Record<IconButtonVariant, string> = {
  solid: 'border border-transparent bg-accent-primary text-text-on-brand',
  ghost: 'border border-transparent bg-transparent text-text-body',
  outline: 'border border-border-default bg-surface-card text-text-strong',
};

/** Square/circular button holding a single icon glyph. Always set `label` for a11y. */
@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.html',
})
export class IconButton {
  readonly label = input.required<string>();
  readonly variant = input<IconButtonVariant>('ghost');
  readonly size = input<IconButtonSize>('md');
  readonly disabled = input(false);
  readonly clicked = output<MouseEvent>();

  readonly classes = computed(() =>
    [
      'inline-flex items-center justify-center rounded-pill',
      'cursor-pointer transition-[filter,transform] duration-200 ease-out hover:brightness-90 active:scale-[0.92]',
      'disabled:opacity-[0.45] disabled:cursor-not-allowed disabled:pointer-events-none',
      SIZE_CLASSES[this.size()],
      VARIANT_CLASSES[this.variant()],
    ].join(' '),
  );

  onClick(event: MouseEvent): void {
    if (this.disabled()) return;
    this.clicked.emit(event);
  }
}
