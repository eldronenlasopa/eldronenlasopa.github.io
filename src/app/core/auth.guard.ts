import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService, UserRole } from './auth.service';

export const authGuard: CanActivateFn = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isAuthenticated()) {
    return router.createUrlTree(['/login'], { queryParams: { redirectTo: route.url.map((s) => s.path).join('/') } });
  }

  const requiredRole = route.data['role'] as UserRole | undefined;
  if (requiredRole && auth.currentUser()?.role !== requiredRole) {
    return router.createUrlTree(['/']);
  }

  return true;
};
