import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private initialized = false;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  init(): void {
    const measurementId = environment.analyticsMeasurementId;
    const tagManagerId = environment.tagManagerId;
    const window = this.document.defaultView as AnalyticsWindow | null;
    if (!window || this.initialized) return;

    if (tagManagerId && !this.document.getElementById('google-tag-manager-script')) {
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

      const script = this.document.createElement('script');
      script.id = 'google-tag-manager-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(tagManagerId)}`;
      this.document.head.appendChild(script);
    }

    if (!measurementId) {
      this.initialized = true;
      return;
    }

    window.dataLayer = window.dataLayer ?? [];
    window.gtag = window.gtag ?? ((...args: unknown[]) => window.dataLayer?.push(args));
    window.gtag('js', new Date());
    window.gtag('config', measurementId);

    if (!this.document.getElementById('google-analytics-script')) {
      const script = this.document.createElement('script');
      script.id = 'google-analytics-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
      this.document.head.appendChild(script);
    }

    this.initialized = true;
  }

  pageView(path: string): void {
    const window = this.document.defaultView as AnalyticsWindow | null;
    if (!this.initialized || !window?.gtag) return;
    window.gtag('config', environment.analyticsMeasurementId, { page_path: path });
  }
}
