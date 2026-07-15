import { Component, DestroyRef, inject, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Loader } from './ui/brand/loader/loader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly showLoader = signal(true);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    const subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationStart || event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError),
    ).subscribe(event => {
      if (event instanceof NavigationStart) this.showLoader.set(true);
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) this.showLoader.set(true);
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  finishLoader(): void { this.showLoader.set(false); }
}
