import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from '../../ui/navigation/header/header';
import { Footer } from '../../ui/navigation/footer/footer';
import { WhatsAppFab } from '../../ui/marketing/whatsapp-fab/whatsapp-fab';
import { CmsContentService } from '../../core/cms-content.service';
import { HeroSection } from './sections/hero-section';
import { ClientsSection } from './sections/clients-section';
import { ServicesSection } from './sections/services-section';
import { PricingSection } from './sections/pricing-section';
import { ReviewsSection } from './sections/reviews-section';
import { ContactSection } from './sections/contact-section';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Footer,
    WhatsAppFab,
    HeroSection,
    ClientsSection,
    ServicesSection,
    PricingSection,
    ReviewsSection,
    ContactSection,
  ],
  templateUrl: './home.html',
})
export class Home {
  private readonly router = inject(Router);
  private readonly cms = inject(CmsContentService);

  readonly header = this.cms.header;

  goToProposal(): void {
    this.router.navigateByUrl('/solicitar-propuesta');
  }
}
