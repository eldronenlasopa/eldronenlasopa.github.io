import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ApiService } from './api.service';

export type UserRole = 'client' | 'admin';

export interface AuthUser {
  id?: string;
  name: string;
  email: string;
  role: UserRole;
  initials: string;
}

const STORAGE_KEY = 'dronlab_session';

function readStoredUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

/**
 * Client-side mock session — this site has no backend. `login` accepts any
 * password and resolves a role from a fixed email lookup, defaulting to
 * `client` for unknown addresses so the flow never dead-ends in the demo.
 * Persisted to localStorage so a page reload doesn't drop the session.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = inject(ApiService);
  private readonly user = signal<AuthUser | null>(readStoredUser());

  readonly currentUser = this.user.asReadonly();
  readonly isAuthenticated = computed(() => this.user() !== null);

  login(email: string, password: string): Observable<AuthUser> {
    return this.api.login(email, password).pipe(
      tap(response => localStorage.setItem('dronlab_token', response.token)),
      map(response => ({
        id: response.id,
        name: response.name,
        email: response.email,
        role: response.role as UserRole,
        initials: response.name.split(' ').map(part => part[0]).join('').slice(0, 2).toUpperCase(),
      })),
      tap(resolved => {
        this.user.set(resolved);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(resolved));
      }),
    );
  }

  logout(): void {
    this.user.set(null);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('dronlab_token');
  }
}
