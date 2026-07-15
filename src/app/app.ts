import { Component, DestroyRef, effect, inject, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Loader } from './ui/brand/loader/loader';
import { ToastStack } from './ui/feedback/toast/toast-stack';
import { DialogOutlet } from './ui/feedback/dialog/dialog-outlet';
import { LoadingService } from './core/services/loading.service';
import { AnalyticsService } from './core/services/analytics.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loader, ToastStack, DialogOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly showLoader = signal(true);
  private readonly router = inject(Router);
  private readonly loading = inject(LoadingService);
  private readonly analytics = inject(AnalyticsService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.analytics.init();
    const subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationStart || event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError),
    ).subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.isAnchorNavigation(event.url)) return;
        this.navigationReady.set(false);
        this.loaderReady.set(false);
        this.showLoader.set(true);
      }
      if (event instanceof NavigationEnd) {
        this.analytics.pageView(event.urlAfterRedirects);
        this.navigationReady.set(true);
      }
      if (event instanceof NavigationCancel || event instanceof NavigationError) this.navigationReady.set(true);
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

  private isAnchorNavigation(url: string): boolean {
    const path = url.split('#', 1)[0] || '/';
    const currentPath = this.router.url.split('#', 1)[0] || '/';
    return path === currentPath;
  }
}
