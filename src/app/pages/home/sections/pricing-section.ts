import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PricingCard } from '../../../ui/marketing/pricing-card/pricing-card';

@Component({
  selector: 'app-pricing-section',
  imports: [PricingCard],
  templateUrl: './pricing-section.html',
})
export class PricingSection {
  private readonly router = inject(Router);

  goToProposal(): void {
    this.router.navigateByUrl('/solicitar-propuesta');
  }
}
