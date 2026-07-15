import { Component, computed, input, output, signal } from '@angular/core';
import { Wordmark } from '../../brand/wordmark/wordmark';
import { Button } from '../../actions/button/button';
import { IconButton } from '../../actions/icon-button/icon-button';

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

/** Marketing site top navigation. Sticky, links + CTA. Glassy on light, solid on dark. Collapses to hamburger menu below `md`. */
@Component({
  selector: 'app-header',
  imports: [Wordmark, Button, IconButton],
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
      'block backdrop-blur-md backdrop-saturate-[1.8]',
      this.inverse()
        ? 'bg-surface-inverse border-b border-border-inverse'
        : 'bg-[rgba(255,255,255,0.86)] border-b border-border-subtle',
    ].join(' '),
  );

  readonly iconClasses = computed(() =>
    this.inverse() ? 'text-text-on-inverse' : 'text-text-strong',
  );

  readonly mobileNavClasses = computed(() =>
    [
      'flex flex-col gap-1 px-5 pb-5 pt-1 md:hidden border-t',
      this.inverse() ? 'border-border-inverse' : 'border-border-subtle',
    ].join(' '),
  );

  readonly mobileLinkClasses = computed(() =>
    [
      'block py-2.5 font-body text-base font-medium no-underline transition-colors duration-200 ease-out hover:text-brand-orange',
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
