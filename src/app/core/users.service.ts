import { Injectable, inject, signal } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ApiService } from './api.service';
import type { ApiAdminUser } from './models/api.models';
import type { BadgeTone } from '../ui/data-display/badge/badge';

export type AdminUserRole = 'admin' | 'client';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminUserRole;
  isActive: boolean;
  createdAt: string;
}

export interface AdminUserInput {
  name: string;
  email: string;
  role: AdminUserRole;
  password: string;
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

function toAdminUser(item: ApiAdminUser): AdminUser {
  return {
    id: item.id,
    name: item.name,
    email: item.email,
    role: item.role.toLowerCase() === 'admin' ? 'admin' : 'client',
    isActive: item.isActive,
    createdAt: new Date(item.createdAt).toLocaleDateString('es-PE', { day: '2-digit', month: 'short', year: 'numeric' }),
  };
}

function apiRole(role: AdminUserRole): string {
  return role === 'admin' ? 'Admin' : 'Client';
}

/** El rol es solo la asignación — el backend aplica los permisos correspondientes. */
@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly api = inject(ApiService);
  private readonly _users = signal<AdminUser[]>([]);
  readonly users = this._users.asReadonly();

  load(): Observable<AdminUser[]> {
    return this.api.adminUsers().pipe(
      map((items) => items.map(toAdminUser)),
      tap((items) => this._users.set(items)),
    );
  }

  create(input: AdminUserInput): Observable<AdminUser> {
    return this.api.createAdminUser({ name: input.name, email: input.email, password: input.password, role: apiRole(input.role) }).pipe(
      map(toAdminUser),
      tap((user) => this._users.update((list) => [...list, user])),
    );
  }

  update(id: string, input: AdminUserInput): Observable<AdminUser> {
    return this.api.updateAdminUser(id, { name: input.name, email: input.email, role: apiRole(input.role) }).pipe(
      map(toAdminUser),
      tap((user) => this._users.update((list) => list.map((u) => (u.id === id ? user : u)))),
    );
  }

  remove(id: string): Observable<void> {
    return this.api.deleteAdminUser(id).pipe(
      tap(() => this._users.update((list) => list.filter((u) => u.id !== id))),
      map(() => undefined),
    );
  }

  activate(id: string): Observable<AdminUser> {
    return this.api.activateAdminUser(id).pipe(
      map(toAdminUser),
      tap((user) => this._users.update((list) => list.map((item) => item.id === id ? user : item))),
    );
  }
}
