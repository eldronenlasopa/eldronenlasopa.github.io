import { Injectable, computed, signal } from '@angular/core';

export type UserRole = 'client' | 'admin';

export interface AuthUser {
  name: string;
  email: string;
  role: UserRole;
  initials: string;
}

const MOCK_USERS: Record<string, AuthUser> = {
  'cliente@dronlab.pe': { name: 'Comercial Andina', email: 'cliente@dronlab.pe', role: 'client', initials: 'CA' },
  'admin@dronlab.pe': { name: 'Equipo DronLab', email: 'admin@dronlab.pe', role: 'admin', initials: 'DL' },
};

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
  private readonly user = signal<AuthUser | null>(readStoredUser());

  readonly currentUser = this.user.asReadonly();
  readonly isAuthenticated = computed(() => this.user() !== null);

  login(email: string): AuthUser {
    const resolved = MOCK_USERS[email.toLowerCase().trim()] ?? {
      name: email.split('@')[0] || 'Cliente',
      email,
      role: 'client' as const,
      initials: (email[0] ?? 'C').toUpperCase(),
    };
    this.user.set(resolved);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resolved));
    return resolved;
  }

  logout(): void {
    this.user.set(null);
    localStorage.removeItem(STORAGE_KEY);
  }
}
