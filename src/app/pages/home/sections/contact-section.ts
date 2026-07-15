import { Component, inject } from '@angular/core';
import { ContactForm } from '../../../ui/forms/contact-form/contact-form';
import { ApiService } from '../../../core/api.service';
import { RecaptchaService } from '../../../core/services/recaptcha.service';
import type { ContactFormValue } from '../../../ui/forms/contact-form/contact-form';

const HIGHLIGHTS = ['Diagnóstico gratuito', 'Presupuesto sin compromiso', 'Equipo local, comunicación en español'];

@Component({ selector: 'app-contact-section', imports: [ContactForm], templateUrl: './contact-section.html' })
export class ContactSection {
  private readonly api = inject(ApiService);
  private readonly recaptcha = inject(RecaptchaService);
  readonly highlights = HIGHLIGHTS;

  async submit(value: ContactFormValue): Promise<void> {
    const recaptchaToken = await this.recaptcha.execute('contact');
    this.api.createContact({ name: value.name, company: null, email: value.email, message: `${value.service}: ${value.message}`, recaptchaToken }).subscribe({
      next: () => window.alert('Mensaje enviado. Te responderemos en menos de 24 horas.'),
      error: () => window.alert('No pudimos enviar el mensaje. Inténtalo nuevamente.'),
    });
  }
}
