import { Component, computed, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Wordmark } from '../../ui/brand/wordmark/wordmark';
import { Button } from '../../ui/actions/button/button';

export type ErrorAccent = 'cyan' | 'orange' | 'yellow';

const ACCENTS: Record<ErrorAccent, string> = {
  cyan: 'var(--brand-cyan)',
  orange: 'var(--brand-orange)',
  yellow: 'var(--brand-yellow)',
};

/**
 * ErrorPage — HUD full-screen error layout. Ink gradient + grid texture + accent glow,
 * giant outline code, mono kicker (ERR · NNN), terminal log line and action row.
 * Presentational; each error route wraps it and wires the buttons.
 */
@Component({
  selector: 'app-error-page',
  imports: [RouterLink, Wordmark, Button],
  templateUrl: './error-page.html',
})
export class ErrorPage {
  readonly code = input.required<string>();
  readonly accent = input<ErrorAccent>('cyan');
  readonly title = input.required<string>();
  readonly description = input('');
  readonly log = input('');
  readonly primaryLabel = input.required<string>();
  readonly secondaryLabel = input('');
  readonly primaryClicked = output<void>();
  readonly secondaryClicked = output<void>();

  readonly accentColor = computed(() => ACCENTS[this.accent()] ?? ACCENTS.cyan);
  readonly glow = computed(
    () => `radial-gradient(circle, color-mix(in srgb, ${this.accentColor()} 18%, transparent), transparent 66%)`,
  );
  readonly codeStroke = computed(() => `2px ${this.accentColor()}`);
  readonly codeGlow = computed(
    () => `drop-shadow(0 0 26px color-mix(in srgb, ${this.accentColor()} 45%, transparent))`,
  );
}
