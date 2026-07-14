import { Component } from '@angular/core';
import { Header } from '../../ui/navigation/header/header';
import { Footer } from '../../ui/navigation/footer/footer';
import { HeroSection } from './sections/hero-section';
import { ServicesSection } from './sections/services-section';
import { PricingSection } from './sections/pricing-section';
import { ContactSection } from './sections/contact-section';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, HeroSection, ServicesSection, PricingSection, ContactSection],
  templateUrl: './home.html',
})
export class Home {}
