import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Header, type HeaderLink } from '../../ui/navigation/header/header';
import { Footer } from '../../ui/navigation/footer/footer';
import { WhatsAppFab } from '../../ui/marketing/whatsapp-fab/whatsapp-fab';
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

  readonly headerLinks: HeaderLink[] = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Clientes', href: '#clientes' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Planes', href: '#planes' },
  ];

  goToProposal(): void {
    this.router.navigateByUrl('/solicitar-propuesta');
  }
}
