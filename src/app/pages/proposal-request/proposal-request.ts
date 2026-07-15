import { Component, computed, inject, signal } from '@angular/core';
import { Button } from '../../ui/actions/button/button';
import { Badge } from '../../ui/data-display/badge/badge';
import { Input } from '../../ui/forms/input/input';
import { Textarea } from '../../ui/forms/textarea/textarea';
import { Wordmark } from '../../ui/brand/wordmark/wordmark';
import { ApiService } from '../../core/api.service';
import { RecaptchaService } from '../../core/services/recaptcha.service';

interface ProjectType { id: string; icon: string; title: string; desc: string; }
const STEPS = ['Proyecto', 'Alcance', 'Contacto', 'Enviado'];
const PROJECT_TYPES: ProjectType[] = [
  { id: 'web', icon: '◆', title: 'Aplicación web', desc: 'Plataforma o panel a medida' },
  { id: 'landing', icon: '▲', title: 'Página / Landing', desc: 'Sitio rápido que convierte' },
  { id: 'auto', icon: '⬡', title: 'Automatización', desc: 'Procesos sin trabajo manual' },
  { id: 'api', icon: '⬢', title: 'Integración / API', desc: 'Conectar tus sistemas' },
];
const BUDGETS = ['Menos de S/ 2,000', 'S/ 2,000 – 5,000', 'S/ 5,000 – 12,000', 'Más de S/ 12,000', 'Aún no lo sé'];
const TIMELINES = ['Lo antes posible', 'En 1–2 meses', 'En 3–6 meses', 'Solo explorando'];

@Component({ selector: 'app-proposal-request', imports: [Button, Badge, Input, Textarea, Wordmark], templateUrl: './proposal-request.html' })
export class ProposalRequest {
  private readonly api = inject(ApiService);
  private readonly recaptcha = inject(RecaptchaService);
  readonly captchaEnabled = this.recaptcha.enabled;
  readonly steps = STEPS; readonly projectTypes = PROJECT_TYPES; readonly budgets = BUDGETS; readonly timelines = TIMELINES;
  readonly step = signal(0); readonly type = signal(''); readonly budget = signal(''); readonly timeline = signal(''); readonly name = signal(''); readonly company = signal(''); readonly email = signal(''); readonly message = signal('');
  readonly typeLabel = computed(() => this.projectTypes.find(t => t.id === this.type())?.title ?? '');

  constructor() { void this.recaptcha.load().catch(() => undefined); }
  readonly canNext = computed(() => this.step() === 0 ? !!this.type() : this.step() === 1 ? !!this.budget() && !!this.timeline() : this.step() === 2 ? !!this.name() && !!this.email() : true);
  stepCircleClasses(i: number): string { const active = i === this.step(); const done = i < this.step(); if (active) return 'bg-[image:var(--gradient-hud)] text-ink-950 border-brand-cyan shadow-glow-soft-cyan'; if (done) return 'bg-[rgba(34,211,238,0.14)] text-brand-cyan border-brand-cyan'; return 'bg-[var(--glass-dark)] text-text-inverse-muted border-[var(--glass-border)]'; }
  stepConnectorClass(i: number): string { return i < this.step() ? 'bg-brand-cyan' : 'bg-[var(--glass-border)]'; }
  stepLabelClasses(i: number): string { const active = i === this.step(); const done = i < this.step(); return active ? 'font-semibold text-text-on-inverse' : done ? 'font-medium text-brand-cyan-300' : 'font-medium text-text-inverse-muted'; }
  typeCardClasses(id: string): string { return this.type() === id ? 'bg-[rgba(255,107,53,0.06)] border-brand-orange shadow-brand' : 'bg-surface-card border-border-subtle shadow-xs'; }
  chipClasses(selected: boolean): string { return selected ? 'bg-brand-orange text-text-on-brand border-brand-orange font-semibold' : 'bg-surface-card text-text-body border-border-default font-medium'; }
  async next(): Promise<void> { if (!this.canNext()) return; if (this.step() === 2) { const recaptchaToken = await this.recaptcha.execute('proposal'); this.api.createProposal({ type: this.type(), budget: this.budget(), timeline: this.timeline(), name: this.name(), company: this.company() || null, email: this.email(), message: this.message() || null, recaptchaToken }).subscribe({ next: () => this.step.set(3), error: () => window.alert('No pudimos enviar la solicitud. Inténtalo nuevamente.') }); return; } this.step.update(s => s + 1); }
  back(): void { this.step.update(s => s - 1); }
  reset(): void { this.step.set(0); this.type.set(''); this.budget.set(''); this.timeline.set(''); this.name.set(''); this.company.set(''); this.email.set(''); this.message.set(''); }
}
