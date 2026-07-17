import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorPage } from './error-page';

/** 500 — fallo del backend. "Reintentar" recarga la página. */
@Component({
  selector: 'app-server-error',
  imports: [ErrorPage],
  template: `
    <app-error-page
      code="500"
      accent="orange"
      title="Error de servidor"
      description="Algo falló de nuestro lado. Ya estamos en ello — intenta de nuevo en unos segundos."
      log="POST /api → 500 · internal_error"
      primaryLabel="Reintentar"
      secondaryLabel="Volver al inicio"
      (primaryClicked)="reload()"
      (secondaryClicked)="router.navigateByUrl('/')"
    />
  `,
})
export class ServerError {
  protected readonly router = inject(Router);

  reload(): void {
    window.location.reload();
  }
}
