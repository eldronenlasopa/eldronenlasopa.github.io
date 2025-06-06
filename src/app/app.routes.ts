import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Route[] = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', loadChildren: () => import('./pages/pages.routes')}
        ]
    },
    /*{
        path: '**', redirectTo: ''
    }*/
];
