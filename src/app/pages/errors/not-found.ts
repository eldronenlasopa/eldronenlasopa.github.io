import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorPage } from './error-page';

/** 404 — ruta inexistente. Wildcard del router. */
@Component({
  selector: 'app-not-found',
  imports: [ErrorPage],
  template: `
    <app-error-page
      code="404"
      accent="cyan"
      title="Página no encontrada"
      description="La ruta que buscas no existe o fue movida. Revisa la dirección o vuelve al inicio."
      [log]="log"
      primaryLabel="Volver al inicio"
      secondaryLabel="Ir al panel"
      (primaryClicked)="router.navigateByUrl('/')"
      (secondaryClicked)="router.navigateByUrl('/panel-cliente')"
    />
  `,
})
export class NotFound {
  protected readonly router = inject(Router);
  protected readonly log = `GET ${(this.router.getCurrentNavigation()?.finalUrl?.toString() ?? this.router.url).split('?')[0] || '/'} → 404 · not_found`;
}
