import { Injectable, inject, signal } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ApiService } from './api.service';
import type { ApiAdminUser } from './models/api.models';
import type { BadgeTone } from '../ui/data-display/badge/badge';

export type AdminUserRole = 'admin' | 'client';
export type AdminUserStatus = 'Active' | 'Invited' | 'Suspended';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminUserRole;
  company: string;
  status: AdminUserStatus;
  lastAccess: string;
}

export interface AdminUserInput {
  name: string;
  email: string;
  role: AdminUserRole;
  company: string;
  status: AdminUserStatus;
  sendInvite: boolean;
}

export const ROLE_META: Record<AdminUserRole, { label: string; tone: BadgeTone; color: string; icon: string; description: string }> = {
  admin: {
    label: 'Administrador',
    tone: 'brand',
    color: '#FF6B35',
    icon: '⬢',
    description: 'Acceso total: clientes, proyectos, tickets, usuarios y contenido web.',
  },
  client: {
    label: 'Cliente',
    tone: 'info',
    color: '#22D3EE',
    icon: '◑',
    description: 'Ve sus propios proyectos, tickets, facturas y archivos.',
  },
};

export const STATUS_TONE: Record<AdminUserStatus, BadgeTone> = { Active: 'success', Invited: 'info', Suspended: 'neutral' };
export const STATUS_LABEL: Record<AdminUserStatus, string> = { Active: 'Activo', Invited: 'Invitado', Suspended: 'Suspendido' };

function toAdminUser(item: ApiAdminUser): AdminUser {
  return {
    id: item.id,
    name: item.name,
    email: item.email,
    role: item.role === 'admin' ? 'admin' : 'client',
    company: item.companyName ?? '',
    status: (item.status as AdminUserStatus) || 'Invited',
    lastAccess: item.lastLoginAt
      ? new Date(item.lastLoginAt).toLocaleString('es-PE', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
      : 'Sin ingresar',
  };
}

function toApiInput(input: AdminUserInput) {
  return { name: input.name, email: input.email, role: input.role, companyName: input.company || undefined, status: input.status, sendInvite: input.sendInvite };
}

/** El rol es solo la asignación — el backend aplica los permisos correspondientes. */
@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly api = inject(ApiService);
  private readonly _users = signal<AdminUser[]>([]);
  readonly users = this._users.asReadonly();

  load(): void {
    this.api.adminUsers().subscribe((items) => this._users.set(items.map(toAdminUser)));
  }

  create(input: AdminUserInput): Observable<AdminUser> {
    return this.api.createAdminUser(toApiInput(input)).pipe(
      map(toAdminUser),
      tap((user) => this._users.update((list) => [...list, user])),
    );
  }

  update(id: string, input: AdminUserInput): Observable<AdminUser> {
    return this.api.updateAdminUser(id, toApiInput(input)).pipe(
      map(toAdminUser),
      tap((user) => this._users.update((list) => list.map((u) => (u.id === id ? user : u)))),
    );
  }

  remove(id: string): Observable<void> {
    return this.api.deleteAdminUser(id).pipe(tap(() => this._users.update((list) => list.filter((u) => u.id !== id))));
  }
}
