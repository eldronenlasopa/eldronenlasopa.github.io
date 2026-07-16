import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Button } from '../../../ui/actions/button/button';
import { Input } from '../../../ui/forms/input/input';
import { Wordmark } from '../../../ui/brand/wordmark/wordmark';
import { AuthService } from '../../../core/auth.service';
import { ToastService } from '../../../core/services/toast.service';

const HOME_BY_ROLE = { client: '/panel-cliente', admin: '/admin' } as const;

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

  readonly email = signal('');
  readonly password = signal('');
  readonly submitting = signal(false);

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
