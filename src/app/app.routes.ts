import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/auth/login/login';
import { ForgotPassword } from './pages/auth/forgot-password/forgot-password';
import { ResetPassword } from './pages/auth/reset-password/reset-password';
import { ProposalRequest } from './pages/proposal-request/proposal-request';
import { ProjectList } from './pages/projects/project-list/project-list';
import { ProjectDetail } from './pages/projects/project-detail/project-detail';
import { ClientDashboard } from './pages/client/client-dashboard';
import { NewTicket } from './pages/client/new-ticket/new-ticket';
import { AdminPanel } from './pages/admin/admin-panel';
import { AdminContent } from './pages/admin/admin-content/admin-content';
import { AdminUsers } from './pages/admin/admin-users/admin-users';
import { Loader } from './ui/brand/loader/loader';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    data: { seo: { title: 'DronLab | Software y automatizaciones a medida', description: 'Diseñamos aplicaciones web, páginas, automatizaciones e integraciones para empresas en Perú. Del prototipo a producción, con acompañamiento cercano.' } },
  },
  {
    path: 'login',
    component: Login,
    data: { seo: { title: 'Acceso de clientes | DronLab', description: 'Acceso privado al panel de clientes y administración de DronLab.', index: false } },
  },
  {
    path: 'olvide-password',
    component: ForgotPassword,
    data: { seo: { title: 'Recuperar contraseña | DronLab', description: 'Solicita un enlace seguro para recuperar el acceso a tu cuenta de DronLab.', index: false } },
  },
  {
    path: 'restablecer-password',
    component: ResetPassword,
    data: { seo: { title: 'Restablecer contraseña | DronLab', description: 'Crea una nueva contraseña para tu cuenta de DronLab.', index: false } },
  },
  {
    path: 'restablecer-contrasena',
    component: ResetPassword,
    data: { seo: { title: 'Restablecer contraseña | DronLab', description: 'Crea una nueva contraseña para tu cuenta de DronLab.', index: false } },
  },
  {
    path: 'loader',
    component: Loader,
    data: { seo: { title: 'Cargando | DronLab', description: 'Pantalla de carga de DronLab.', index: false } },
  },
  {
    path: 'solicitar-propuesta',
    component: ProposalRequest,
    data: { seo: { title: 'Solicita una propuesta de software | DronLab', description: 'Cuéntanos tu proyecto de software, página web, automatización o integración. Recibe una primera propuesta de alcance y presupuesto.' } },
  },
  {
    path: 'proyectos',
    component: ProjectList,
    data: { seo: { title: 'Proyectos de software y automatización | DronLab', description: 'Conoce proyectos de aplicaciones web, landings, automatizaciones e integraciones desarrollados por DronLab para empresas.' } },
  },
  {
    path: 'proyectos/:slug',
    component: ProjectDetail,
    data: { seo: { title: 'Proyecto de software | DronLab', description: 'Caso de éxito de software a medida desarrollado por DronLab.', type: 'article' } },
  },
  {
    path: 'panel-cliente',
    component: ClientDashboard,
    canActivate: [authGuard],
    data: { role: 'client', seo: { title: 'Panel de cliente | DronLab', description: 'Área privada de clientes de DronLab.', index: false } },
  },
  {
    path: 'panel-cliente/proyectos/:slug',
    component: ProjectDetail,
    canActivate: [authGuard],
    data: { role: 'client', seo: { title: 'Detalle de proyecto | DronLab', description: 'Información privada de un proyecto de DronLab.', index: false } },
  },
  {
    path: 'panel-cliente/tickets/nuevo',
    component: NewTicket,
    canActivate: [authGuard],
    data: { role: 'client', seo: { title: 'Nuevo ticket | DronLab', description: 'Formulario privado de soporte para clientes de DronLab.', index: false } },
  },
  {
    path: 'admin',
    component: AdminPanel,
    canActivate: [authGuard],
    data: { role: 'admin', seo: { title: 'Administración | DronLab', description: 'Área privada de administración de DronLab.', index: false } },
  },
  {
    path: 'admin/contenido',
    component: AdminContent,
    canActivate: [authGuard],
    data: { role: 'admin', seo: { title: 'CMS | DronLab', description: 'Editor privado de contenidos de DronLab.', index: false } },
  },
  {
    path: 'admin/usuarios',
    component: AdminUsers,
    canActivate: [authGuard],
    data: { role: 'admin', seo: { title: 'Usuarios y roles | DronLab', description: 'Gestión privada de usuarios y roles de DronLab.', index: false } },
  },
];
