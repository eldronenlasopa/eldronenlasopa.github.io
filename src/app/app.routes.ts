import { Route } from '@angular/router';

export const routes: Route[] = [
    {
        path: '',
        loadChildren: () => import('./layout/layout.routing').then(m => m.default)
    },
    { path: '**', redirectTo: '' } // Redirige rutas no encontradas
];
