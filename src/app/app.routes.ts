import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/auth/login/login';
import { ProposalRequest } from './pages/proposal-request/proposal-request';
import { ProjectList } from './pages/projects/project-list/project-list';
import { ProjectDetail } from './pages/projects/project-detail/project-detail';
import { ClientDashboard } from './pages/client/client-dashboard';
import { NewTicket } from './pages/client/new-ticket/new-ticket';
import { AdminPanel } from './pages/admin/admin-panel';
import { Loader } from './ui/brand/loader/loader';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'loader', component: Loader },
  { path: 'solicitar-propuesta', component: ProposalRequest },
  { path: 'proyectos', component: ProjectList },
  { path: 'proyectos/:slug', component: ProjectDetail },
  {
    path: 'panel-cliente',
    component: ClientDashboard,
    canActivate: [authGuard],
    data: { role: 'client' },
  },
  {
    path: 'panel-cliente/proyectos/:slug',
    component: ProjectDetail,
    canActivate: [authGuard],
    data: { role: 'client' },
  },
  {
    path: 'panel-cliente/tickets/nuevo',
    component: NewTicket,
    canActivate: [authGuard],
    data: { role: 'client' },
  },
  {
    path: 'admin',
    component: AdminPanel,
    canActivate: [authGuard],
    data: { role: 'admin' },
  },
];
