import { Component, computed, input, output } from '@angular/core';
import { Button } from '../../actions/button/button';

export type DialogTone = 'brand' | 'success' | 'warning' | 'danger' | 'info';

const TONES: Record<DialogTone, { color: string; glyph: string }> = {
  brand: { color: 'var(--brand-orange)', glyph: '◆' },
  success: { color: 'var(--success)', glyph: '✓' },
  warning: { color: 'var(--brand-yellow)', glyph: '!' },
  danger: { color: 'var(--danger)', glyph: '×' },
  info: { color: 'var(--brand-cyan)', glyph: 'i' },
};

/**
 * Dialog — HUD modal for confirmations. Grid-textured blurred overlay,
 * glass panel with a neon tone bar + glow, icon chip and action row.
 * `cancelLabel: null` oculta el botón cancelar. Escape/backdrop emiten `cancelled`.
 */
@Component({
  selector: 'app-dialog',
  imports: [Button],
  templateUrl: './dialog.html',
  styleUrl: './dialog.css',
  host: {
    '(document:keydown.escape)': 'onEscape()',
  },
})
export class Dialog {
  readonly open = input(true);
  readonly tone = input<DialogTone>('brand');
  readonly title = input('');
  readonly message = input('');
  readonly confirmLabel = input('Confirmar');
  readonly cancelLabel = input<string | null>('Cancelar');
  readonly confirmed = output<void>();
  readonly cancelled = output<void>();

  readonly toneColor = computed(() => (TONES[this.tone()] ?? TONES.brand).color);
  readonly toneGlyph = computed(() => (TONES[this.tone()] ?? TONES.brand).glyph);
  readonly ringGradient = computed(
    () => `conic-gradient(from 0deg, transparent 0 62%, ${this.toneColor()} 80%, #fff 90%, transparent 100%)`,
  );
  readonly cornerGlow = computed(
    () => `radial-gradient(circle, color-mix(in srgb, ${this.toneColor()} 20%, transparent), transparent 66%)`,
  );
  readonly panelShadow = computed(
    () => `0 30px 80px -20px rgba(0,0,0,0.7), 0 0 40px -16px ${this.toneColor()}`,
  );

  onEscape(): void {
    if (this.open()) this.cancelled.emit();
  }

  onBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.cancelled.emit();
  }
}
