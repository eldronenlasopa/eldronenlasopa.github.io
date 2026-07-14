import { Component, computed, input, output } from '@angular/core';
import { Button } from '../../actions/button/button';
import { Badge } from '../../data-display/badge/badge';

/** A single plan in a pricing grid. `featured` highlights the recommended plan. */
@Component({
  selector: 'app-pricing-card',
  imports: [Button, Badge],
  templateUrl: './pricing-card.html',
})
export class PricingCard {
  readonly name = input.required<string>();
  readonly price = input.required<string>();
  readonly period = input('/mes');
  readonly description = input<string>();
  readonly features = input<string[]>([]);
  readonly cta = input('Empezar');
  readonly featured = input(false);
  readonly badge = input<string>();
  readonly ctaClicked = output<void>();

  readonly cardClasses = computed(() =>
    [
      'relative box-border flex w-[300px] flex-col gap-5 rounded-xl p-8 transition-transform duration-200 ease-out',
      this.featured()
        ? 'scale-[1.03] border border-transparent bg-surface-inverse text-text-on-inverse shadow-lg'
        : 'border border-border-subtle bg-surface-card text-text-body shadow-sm',
    ].join(' '),
  );
}
