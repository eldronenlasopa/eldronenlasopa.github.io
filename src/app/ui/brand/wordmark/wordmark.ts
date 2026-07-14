import { Component, computed, input } from '@angular/core';

export type WordmarkSize = 'sm' | 'md' | 'lg';
export type WordmarkTone = 'dark' | 'light';
export type WordmarkVariant = 'brackets' | 'monogram' | 'terminal';

const SIZE_PX: Record<WordmarkSize, string> = {
  sm: '16px',
  md: '22px',
  lg: '34px',
};

/**
 * Typographic brand lockup for El Dron en la Sopa — no official logo file exists.
 * `terminal` (~/dronlab ▮) is the official default; `brackets` and `monogram` are alternatives.
 */
@Component({
  selector: 'app-wordmark',
  templateUrl: './wordmark.html',
})
export class Wordmark {
  readonly size = input<WordmarkSize>('md');
  readonly tone = input<WordmarkTone>('dark');
  readonly variant = input<WordmarkVariant>('terminal');

  readonly fontSize = computed(() => SIZE_PX[this.size()]);
  readonly toneClass = computed(() => (this.tone() === 'light' ? 'text-text-on-inverse' : 'text-text-strong'));

  readonly wrapperClasses = computed(() => {
    const base = 'inline-flex items-center leading-none whitespace-nowrap font-bold';
    switch (this.variant()) {
      case 'monogram':
        return `${base} gap-[0.5em] tracking-[0.02em] font-display ${this.toneClass()}`;
      case 'terminal':
        return `${base} gap-[0.15em] tracking-normal font-mono ${this.toneClass()}`;
      default:
        return `${base} items-baseline gap-[0.34em] tracking-[-0.01em] font-display ${this.toneClass()}`;
    }
  });
}
