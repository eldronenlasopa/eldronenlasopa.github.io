import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

declare global {
  interface Window {
    grecaptcha?: {
      ready(callback: () => void): void;
      execute(siteKey: string, options: { action: string }): Promise<string>;
    };
  }
}

@Injectable({ providedIn: 'root' })
export class RecaptchaService {
  private scriptPromise?: Promise<void>;
  readonly enabled = Boolean(environment.recaptchaSiteKey);

  load(): Promise<void> {
    return this.enabled ? this.loadScript() : Promise.resolve();
  }

  async execute(action: string): Promise<string | null> {
    if (!environment.recaptchaSiteKey) return null;
    await this.load();
    if (!window.grecaptcha) return null;
    return new Promise(resolve => window.grecaptcha!.ready(() =>
      window.grecaptcha!.execute(environment.recaptchaSiteKey, { action }).then(resolve).catch(() => resolve(null))));
  }

  private loadScript(): Promise<void> {
    if (window.grecaptcha) return Promise.resolve();
    if (this.scriptPromise) return this.scriptPromise;
    this.scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(environment.recaptchaSiteKey)}`;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('No se pudo cargar reCAPTCHA.'));
      document.head.appendChild(script);
    });
    return this.scriptPromise;
  }
}
