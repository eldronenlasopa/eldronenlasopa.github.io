import { Component, computed, input, output, signal } from '@angular/core';
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

/** Marketing site top navigation. Sticky, links + CTA. Glassy on light, solid on dark. Collapses to hamburger menu below 820px. */
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

  readonly menuOpen = signal(false);

  readonly linkClasses = computed(() =>
    [
      'font-body text-[15px] font-medium no-underline transition-colors duration-200 ease-out hover:text-brand-orange',
      this.inverse() ? 'text-text-on-inverse' : 'text-text-body',
    ].join(' '),
  );

  readonly headerClasses = computed(() =>
    [
      'relative block backdrop-blur-md backdrop-saturate-[1.8]',
      this.inverse()
        ? 'bg-surface-inverse border-b border-border-inverse'
        : 'bg-[rgba(255,255,255,0.86)] border-b border-border-subtle',
    ].join(' '),
  );

  readonly barClasses = computed(() => {
    const base = ['block h-0.5 w-6 rounded-sm transition-[transform,opacity] duration-200 ease-out', this.inverse() ? 'bg-text-on-inverse' : 'bg-text-strong'].join(' ');
    const open = this.menuOpen();
    return [
      `${base} ${open ? 'translate-y-[7px] rotate-45' : ''}`,
      `${base} ${open ? 'opacity-0' : ''}`,
      `${base} ${open ? '-translate-y-[7px] -rotate-45' : ''}`,
    ];
  });

  readonly mobileNavClasses = computed(() =>
    [
      'absolute inset-x-0 top-full z-[60] flex min-[821px]:hidden flex-col gap-1 px-[clamp(20px,5vw,32px)] pt-3 pb-5 shadow-lg border-b',
      this.inverse() ? 'bg-surface-inverse border-border-inverse' : 'bg-surface-card border-border-subtle',
    ].join(' '),
  );

  readonly mobileLinkClasses = computed(() =>
    [
      'rounded-sm px-2 py-3 font-body text-base font-medium no-underline transition-colors duration-200 ease-out hover:text-brand-orange',
      this.inverse() ? 'text-text-on-inverse' : 'text-text-body',
    ].join(' '),
  );

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  onMobileCta(): void {
    this.closeMenu();
    this.ctaClicked.emit();
  }
}
