import { Component, DestroyRef, effect, inject, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Loader } from './ui/brand/loader/loader';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly showLoader = signal(true);
  private readonly router = inject(Router);
  private readonly loading = inject(LoadingService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    const subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationStart || event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError),
    ).subscribe(event => {
      if (event instanceof NavigationStart) {
        this.navigationReady.set(false);
        this.loaderReady.set(false);
        this.showLoader.set(true);
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) this.navigationReady.set(true);
    });
    effect(() => { this.loading.hasPendingRequests(); this.tryHideLoader(); });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  private readonly navigationReady = signal(false);
  private readonly loaderReady = signal(false);

  finishLoader(): void {
    this.loaderReady.set(true);
    this.tryHideLoader();
  }

  private tryHideLoader(): void {
    if (this.navigationReady() && this.loaderReady() && !this.loading.hasPendingRequests()) this.showLoader.set(false);
  }
}
