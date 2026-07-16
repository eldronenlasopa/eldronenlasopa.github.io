import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Button } from '../../../ui/actions/button/button';
import { Input } from '../../../ui/forms/input/input';
import { Wordmark } from '../../../ui/brand/wordmark/wordmark';
import { AuthService } from '../../../core/auth.service';
import { ToastService } from '../../../core/services/toast.service';

const HOME_BY_ROLE = { client: '/panel-cliente', admin: '/admin' } as const;

type LoginRole = 'client' | 'admin';

/** Role toggle only drives copy/placeholder — the actual redirect uses the role the backend returns. */
@Component({
  selector: 'app-login',
  imports: [FormsModule, Button, Input, Wordmark, RouterLink],
  templateUrl: './login.html',
})
export class Login {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly toast = inject(ToastService);

  readonly role = signal<LoginRole>('client');
  readonly email = signal('');
  readonly password = signal('');
  readonly submitting = signal(false);

  readonly emailPlaceholder = computed(() => (this.role() === 'admin' ? 'admin@dronlab.pe' : 'tu@empresa.com'));
  readonly submitLabel = computed(() => (this.role() === 'admin' ? 'Entrar como administrador' : 'Entrar al panel'));

  roleButtonClasses(id: LoginRole): string {
    const on = this.role() === id;
    return [
      'flex-1 cursor-pointer rounded-pill px-3 py-2.5 font-body text-[14.5px] transition-all duration-150 ease-out',
      on ? 'bg-surface-card font-semibold text-text-strong shadow-sm' : 'bg-transparent font-medium text-text-muted',
    ].join(' ');
  }

  onSubmit(): void {
    if (this.submitting()) return;
    this.submitting.set(true);
    this.auth.login(this.email(), this.password()).subscribe({
      next: (user) => {
        this.submitting.set(false);
        const redirectTo = this.route.snapshot.queryParamMap.get('redirectTo');
        this.router.navigateByUrl(redirectTo ? '/' + redirectTo : HOME_BY_ROLE[user.role]);
      },
      error: () => {
        this.submitting.set(false);
        this.toast.error('No pudimos iniciar sesión', 'Revisa tu correo y contraseña.');
      },
    });
  }
}
