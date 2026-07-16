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

/** Persiste la sesión devuelta por el backend para conservarla entre recargas. */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = inject(ApiService);
  private readonly user = signal<AuthUser | null>(readStoredUser());

  readonly currentUser = this.user.asReadonly();
  readonly isAuthenticated = computed(() => this.user() !== null);

  login(email: string, password: string): Observable<AuthUser> {
    return this.api.login(email, password).pipe(
      tap(response => localStorage.setItem('dronlab_token', response.token)),
      map(response => {
        const role: UserRole = response.role.toLowerCase() === 'admin' ? 'admin' : 'client';
        return {
          id: response.id,
          name: response.name,
          email: response.email,
          role,
          initials: response.name.split(' ').map(part => part[0]).join('').slice(0, 2).toUpperCase(),
        };
      }),
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

  requestPasswordReset(email: string): Observable<void> {
    return this.api.forgotPassword(email);
  }

  resetPassword(token: string, password: string): Observable<void> {
    return this.api.resetPassword(token, password);
  }
}
