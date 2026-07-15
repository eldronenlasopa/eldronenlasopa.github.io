import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../../../ui/data-display/card/card';
import { Button } from '../../../ui/actions/button/button';
import { Input } from '../../../ui/forms/input/input';
import { Wordmark } from '../../../ui/brand/wordmark/wordmark';
import { AuthService } from '../../../core/auth.service';

const HOME_BY_ROLE = { client: '/panel-cliente', admin: '/admin' } as const;

/** Mock login — this site has no backend, any password is accepted for a known email. */
@Component({
  selector: 'app-login',
  imports: [FormsModule, Card, Button, Input, Wordmark],
  templateUrl: './login.html',
})
export class Login {
  readonly email = signal('cliente@dronlab.pe');
  readonly password = signal('');

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {}

  onSubmit(): void {
    this.auth.login(this.email(), this.password()).subscribe({
      next: user => { const redirectTo = this.route.snapshot.queryParamMap.get('redirectTo'); this.router.navigateByUrl(redirectTo ? '/' + redirectTo : HOME_BY_ROLE[user.role]); },
      error: () => window.alert('No pudimos iniciar sesión. Revisa tus credenciales.'),
    });
  }
}
