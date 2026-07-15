import { Component, computed, signal } from '@angular/core';

interface Review {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  rating: number;
  color: string;
}

const REVIEWS: Review[] = [
  {
    quote:
      'El panel de inventario nos cambió la operación por completo. Redujimos el tiempo de conteo casi a la mitad y ahora tomamos decisiones con datos en tiempo real, no con corazonadas.',
    name: 'María Fernández',
    role: 'Gerente de operaciones',
    company: 'Comercial Andina',
    initials: 'MF',
    rating: 5,
    color: '#FF6B35',
  },
  {
    quote:
      'Automatizaron toda nuestra facturación conectándola con la SUNAT. Recuperamos 8 horas a la semana que antes eran puro trabajo manual y errores.',
    name: 'Diego Vega',
    role: 'Fundador',
    company: 'Estudio Vega',
    initials: 'DV',
    rating: 5,
    color: '#22D3EE',
  },
  {
    quote:
      'La landing de campaña triplicó nuestras conversiones. Comunicación clara, entregas a tiempo y un equipo que de verdad entiende de negocio.',
    name: 'Ana Rojas',
    role: 'Marketing lead',
    company: 'Nova Fitness',
    initials: 'AR',
    rating: 5,
    color: '#F7C948',
  },
  {
    quote:
      'Integraron tres pasarelas de pago en un checkout único y estable. Cero caídas en campaña alta. Son el equipo técnico que quisiéramos tener de planta.',
    name: 'Luis Paredes',
    role: 'CTO',
    company: 'MercadoSur',
    initials: 'LP',
    rating: 5,
    color: '#7DE8F7',
  },
];

const STARS = [0, 1, 2, 3, 4];

@Component({
  selector: 'app-reviews-section',
  templateUrl: './reviews-section.html',
})
export class ReviewsSection {
  readonly reviews = REVIEWS;
  readonly stars = STARS;

  readonly active = signal(0);
  readonly activeReview = computed(() => this.reviews[this.active()]);

  select(index: number): void {
    this.active.set(index);
  }

  avatarButtonClasses(index: number): string {
    const on = index === this.active();
    return [
      'cursor-pointer rounded-full border-2 p-0 transition-transform duration-200 ease-out',
      on ? 'scale-[1.06]' : 'scale-100',
    ].join(' ');
  }

  avatarClasses(index: number): string {
    const on = index === this.active();
    return [
      'm-0.5 inline-flex h-12 w-12 items-center justify-center rounded-full font-display text-base font-bold',
      on ? 'bg-[image:var(--gradient-hud)] text-ink-950 opacity-100' : 'bg-surface-sunken text-text-muted opacity-75',
    ].join(' ');
  }
}
