import { Component, computed, signal } from '@angular/core';
import { Button } from '../../ui/actions/button/button';
import { Badge } from '../../ui/data-display/badge/badge';
import { Input } from '../../ui/forms/input/input';
import { Textarea } from '../../ui/forms/textarea/textarea';
import { Wordmark } from '../../ui/brand/wordmark/wordmark';

interface ProjectType {
  id: string;
  icon: string;
  title: string;
  desc: string;
}

const STEPS = ['Proyecto', 'Alcance', 'Contacto', 'Enviado'];

const PROJECT_TYPES: ProjectType[] = [
  { id: 'web', icon: '◆', title: 'Aplicación web', desc: 'Plataforma o panel a medida' },
  { id: 'landing', icon: '▲', title: 'Página / Landing', desc: 'Sitio rápido que convierte' },
  { id: 'auto', icon: '⬡', title: 'Automatización', desc: 'Procesos sin trabajo manual' },
  { id: 'api', icon: '⬢', title: 'Integración / API', desc: 'Conectar tus sistemas' },
];

const BUDGETS = ['Menos de S/ 2,000', 'S/ 2,000 – 5,000', 'S/ 5,000 – 12,000', 'Más de S/ 12,000', 'Aún no lo sé'];
const TIMELINES = ['Lo antes posible', 'En 1–2 meses', 'En 3–6 meses', 'Solo explorando'];

/** Multi-step "Solicitud de propuesta" wizard: project type, scope, contact and confirmation. */
@Component({
  selector: 'app-proposal-request',
  imports: [Button, Badge, Input, Textarea, Wordmark],
  templateUrl: './proposal-request.html',
})
export class ProposalRequest {
  readonly steps = STEPS;
  readonly projectTypes = PROJECT_TYPES;
  readonly budgets = BUDGETS;
  readonly timelines = TIMELINES;

  readonly step = signal(0);

  readonly type = signal('');
  readonly budget = signal('');
  readonly timeline = signal('');
  readonly name = signal('');
  readonly company = signal('');
  readonly email = signal('');
  readonly message = signal('');

  readonly typeLabel = computed(() => this.projectTypes.find((t) => t.id === this.type())?.title ?? '');

  readonly canNext = computed(() => {
    switch (this.step()) {
      case 0:
        return !!this.type();
      case 1:
        return !!this.budget() && !!this.timeline();
      case 2:
        return !!this.name() && !!this.email();
      default:
        return true;
    }
  });

  stepCircleClasses(i: number): string {
    const active = i === this.step();
    const done = i < this.step();
    if (active) return 'bg-[image:var(--gradient-hud)] text-ink-950 border-brand-cyan shadow-glow-soft-cyan';
    if (done) return 'bg-[rgba(34,211,238,0.14)] text-brand-cyan border-brand-cyan';
    return 'bg-[var(--glass-dark)] text-text-inverse-muted border-[var(--glass-border)]';
  }

  stepConnectorClass(i: number): string {
    return i < this.step() ? 'bg-brand-cyan' : 'bg-[var(--glass-border)]';
  }

  stepLabelClasses(i: number): string {
    const active = i === this.step();
    const done = i < this.step();
    if (active) return 'font-semibold text-text-on-inverse';
    if (done) return 'font-medium text-brand-cyan-300';
    return 'font-medium text-text-inverse-muted';
  }

  typeCardClasses(id: string): string {
    const on = this.type() === id;
    return on
      ? 'bg-[rgba(255,107,53,0.06)] border-brand-orange shadow-brand'
      : 'bg-surface-card border-border-subtle shadow-xs';
  }

  chipClasses(selected: boolean): string {
    return selected
      ? 'bg-brand-orange text-text-on-brand border-brand-orange font-semibold'
      : 'bg-surface-card text-text-body border-border-default font-medium';
  }

  next(): void {
    if (!this.canNext()) return;
    this.step.update((s) => s + 1);
  }

  back(): void {
    this.step.update((s) => s - 1);
  }

  reset(): void {
    this.step.set(0);
    this.type.set('');
    this.budget.set('');
    this.timeline.set('');
    this.name.set('');
    this.company.set('');
    this.email.set('');
    this.message.set('');
  }
}
