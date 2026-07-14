import { Component, computed, input, output } from '@angular/core';
import { Wordmark } from '../../brand/wordmark/wordmark';
import { Button } from '../../actions/button/button';

export interface HeaderLink {
  label: string;
  href: string;
}

const DEFAULT_LINKS: HeaderLink[] = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Planes', href: '#planes' },
  { label: 'Nosotros', href: '#nosotros' },
];

/** Marketing site top navigation. Sticky, links + CTA. Glassy on light, solid on dark. */
@Component({
  selector: 'app-header',
  imports: [Wordmark, Button],
  templateUrl: './header.html',
})
export class Header {
  readonly links = input<HeaderLink[]>(DEFAULT_LINKS);
  readonly cta = input('Solicitar propuesta');
  readonly inverse = input(false);
  readonly ctaClicked = output<void>();

  readonly linkClasses = computed(() =>
    [
      'font-body text-[15px] font-medium no-underline transition-colors duration-200 ease-out hover:text-brand-orange',
      this.inverse() ? 'text-text-on-inverse' : 'text-text-body',
    ].join(' '),
  );

  readonly headerClasses = computed(() =>
    [
      'flex items-center justify-between px-8 py-4 backdrop-blur-md backdrop-saturate-[1.8]',
      this.inverse()
        ? 'bg-surface-inverse border-b border-border-inverse'
        : 'bg-[rgba(255,255,255,0.86)] border-b border-border-subtle',
    ].join(' '),
  );
}
