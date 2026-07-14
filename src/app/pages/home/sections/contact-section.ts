import { Component } from '@angular/core';
import { ContactForm } from '../../../ui/forms/contact-form/contact-form';

const HIGHLIGHTS = ['Diagnóstico gratuito', 'Presupuesto sin compromiso', 'Equipo local, comunicación en español'];

@Component({
  selector: 'app-contact-section',
  imports: [ContactForm],
  templateUrl: './contact-section.html',
})
export class ContactSection {
  readonly highlights = HIGHLIGHTS;
}
