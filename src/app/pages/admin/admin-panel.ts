import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../../ui/data-display/card/card';
import { Badge, type BadgeTone } from '../../ui/data-display/badge/badge';
import { Button } from '../../ui/actions/button/button';
import { IconButton } from '../../ui/actions/icon-button/icon-button';
import { Wordmark } from '../../ui/brand/wordmark/wordmark';
import { AuthService } from '../../core/auth.service';
import { TicketsService } from '../../core/tickets.service';
import { CmsContentService } from '../../core/cms-content.service';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  route?: string;
}

interface AdminClient {
  name: string;
  sector: string;
  ingresos: string;
  estado: [string, BadgeTone];
  initials: string;
  color: string;
}

interface AdminProjectRow {
  slug: string;
  name: string;
  cliente: string;
  lead: string;
  progress: number;
  estado: [string, BadgeTone];
}

const NAV: NavItem[] = [
  { id: 'resumen', label: 'Resumen', icon: '◧' },
  { id: 'clientes', label: 'Clientes', icon: '◑' },
  { id: 'proyectos', label: 'Proyectos', icon: '▤' },
  { id: 'tickets', label: 'Tickets', icon: '◇' },
  { id: 'contenido', label: 'Contenido web', icon: '❏', route: '/admin/contenido' },
];

const CLIENTS: AdminClient[] = [
  { name: 'Comercial Andina', sector: 'Retail', ingresos: 'S/ 11.5k', estado: ['Activo', 'success'], initials: 'CA', color: '#FF6B35' },
  { name: 'Estudio Vega', sector: 'Legal', ingresos: 'S/ 6.2k', estado: ['Activo', 'success'], initials: 'EV', color: '#22D3EE' },
  { name: 'Nova Fitness', sector: 'Fitness', ingresos: 'S/ 4.8k', estado: ['Activo', 'success'], initials: 'NF', color: '#F7C948' },
  { name: 'MercadoSur', sector: 'E-commerce', ingresos: 'S/ 18.9k', estado: ['En riesgo', 'warning'], initials: 'MS', color: '#22D3EE' },
  { name: 'Grupo Delta', sector: 'Servicios', ingresos: 'S/ 9.1k', estado: ['Inactivo', 'neutral'], initials: 'GD', color: '#7C6FF0' },
];

/** Locally-mocked delivery status for each real project — projects-data.ts has no progress/lead/status fields. */
const PROJECT_MOCK: Record<string, { lead: string; progress: number; estado: [string, BadgeTone] }> = {
  'panel-inventario': { lead: 'María Q.', progress: 72, estado: ['En desarrollo', 'warning'] },
  'automatizacion-facturas': { lead: 'Ana R.', progress: 34, estado: ['En desarrollo', 'warning'] },
  'landing-campana-q3': { lead: 'Diego V.', progress: 100, estado: ['Entregado', 'success'] },
  'integracion-pagos': { lead: 'Diego V.', progress: 88, estado: ['QA', 'info'] },
  'portal-clientes': { lead: 'Luis P.', progress: 51, estado: ['En desarrollo', 'warning'] },
  'bot-reservas': { lead: 'Camila S.', progress: 100, estado: ['Entregado', 'success'] },
  'ecommerce-textil': { lead: 'María Q.', progress: 100, estado: ['Entregado', 'success'] },
  'dashboard-logistica': { lead: 'Ana R.', progress: 100, estado: ['Entregado', 'success'] },
  'sync-crm-erp': { lead: 'Diego V.', progress: 100, estado: ['Entregado', 'success'] },
  'landing-saas': { lead: 'Luis P.', progress: 100, estado: ['Entregado', 'success'] },
};

/** All seed/mock tickets belong to the single mocked client session (`cliente@dronlab.pe` → Comercial Andina). */
const TICKET_CLIENT_FALLBACK = 'Comercial Andina';

const TICKET_ESTADO_TONE: Record<string, BadgeTone> = {
  Abierto: 'brand',
  'En revisión': 'info',
  Cerrado: 'neutral',
};

/** Internal admin console: cross-client KPIs, clients, portfolio-wide projects and tickets. */
@Component({
  selector: 'app-admin-panel',
  imports: [Card, Badge, Button, IconButton, Wordmark],
  templateUrl: './admin-panel.html',
})
export class AdminPanel {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly ticketsService = inject(TicketsService);
  private readonly cms = inject(CmsContentService);

  readonly nav = NAV;
  readonly clients = CLIENTS;
  readonly topClients = CLIENTS.slice(0, 4);
  readonly projects = computed<AdminProjectRow[]>(() =>
    this.cms.projects().map((p) => ({
      slug: `${p.client}-${p.title}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
      name: p.title,
      cliente: p.client,
      ...(PROJECT_MOCK[p.title] ?? { lead: 'Equipo DronLab', progress: 65, estado: ['En contenido', 'info'] as [string, BadgeTone] }),
    })),
  );
  readonly tickets = this.ticketsService.tickets;

  readonly user = this.auth.currentUser;

  readonly active = signal('resumen');
  readonly activeLabel = computed(() => this.nav.find((n) => n.id === this.active())?.label ?? '');

  readonly activeClientsCount = this.clients.filter((c) => c.estado[0] === 'Activo').length;
  readonly activeProjectsCount = computed(() => this.projects().filter((p) => p.estado[0] !== 'Entregado').length);
  readonly atRiskProjectsCount = computed(() => this.projects().filter((p) => p.estado[0] !== 'Entregado' && p.progress < 50).length);
  readonly monthlyRevenue = `S/ ${this.clients.reduce((sum, c) => sum + parseFloat(c.ingresos.replace(/[^0-9.]/g, '')), 0).toFixed(1)}k`;

  readonly openTicketsCount = computed(() => this.tickets().filter((t) => t.estado === 'Abierto').length);
  readonly highPrioTicketsCount = computed(() => this.tickets().filter((t) => t.prio[0] === 'Alta').length);
  readonly urgentTickets = computed(() => this.tickets().filter((t) => t.prio[0] === 'Alta'));

  selectNav(n: NavItem): void {
    if (n.route) {
      this.router.navigateByUrl(n.route);
      return;
    }
    this.active.set(n.id);
  }

  navClasses(id: string): string {
    const on = id === this.active();
    return [
      'flex items-center gap-3 rounded-md px-3.5 py-[11px] text-left font-body text-[15px] transition-colors duration-200 ease-out',
      on ? 'bg-[image:var(--gradient-hud)] font-semibold text-ink-950 shadow-glow-soft-cyan' : 'font-medium text-text-inverse-muted hover:text-text-on-inverse',
    ].join(' ');
  }

  progressBarClass(progress: number): string {
    return progress === 100 ? 'bg-success' : 'bg-brand-orange';
  }

  clientProjectCount(name: string): number {
    return this.projects().filter((p) => p.cliente === name).length;
  }

  clientTicketCount(name: string): number {
    return name === TICKET_CLIENT_FALLBACK ? this.tickets().length : 0;
  }

  ticketClient(): string {
    return TICKET_CLIENT_FALLBACK;
  }

  estadoTone(estado: string): BadgeTone {
    return TICKET_ESTADO_TONE[estado] ?? 'neutral';
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
