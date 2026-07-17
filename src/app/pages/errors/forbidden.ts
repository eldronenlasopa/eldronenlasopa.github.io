import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorPage } from './error-page';

/** 403 — sin permisos para la sección. Destino del guard en mismatch de rol. */
@Component({
  selector: 'app-forbidden',
  imports: [ErrorPage],
  template: `
    <app-error-page
      code="403"
      accent="yellow"
      title="Acceso restringido"
      description="No tienes permisos para ver esta sección. Inicia sesión con una cuenta autorizada."
      log="GET /admin → 403 · forbidden"
      primaryLabel="Iniciar sesión"
      secondaryLabel="Volver al inicio"
      (primaryClicked)="router.navigateByUrl('/login')"
      (secondaryClicked)="router.navigateByUrl('/')"
    />
  `,
})
export class Forbidden {
  protected readonly router = inject(Router);
}
