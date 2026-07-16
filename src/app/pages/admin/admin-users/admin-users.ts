import { Component, HostListener, computed, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../../../ui/data-display/card/card';
import { Badge } from '../../../ui/data-display/badge/badge';
import { Button } from '../../../ui/actions/button/button';
import { Input } from '../../../ui/forms/input/input';
import { Select, type SelectOption } from '../../../ui/forms/select/select';
import { Wordmark } from '../../../ui/brand/wordmark/wordmark';
import { ToastService } from '../../../core/services/toast.service';
import { DialogService } from '../../../core/services/dialog.service';
import {
  UsersService,
  AdminUser,
  AdminUserInput,
  AdminUserRole,
  ROLE_META,
  STATUS_TONE,
  STATUS_LABEL,
} from '../../../core/users.service';

const ROLES: AdminUserRole[] = ['admin', 'client'];

const STATUS_OPTIONS: SelectOption[] = [
  { value: 'Active', label: 'Activo' },
  { value: 'Invited', label: 'Invitado' },
  { value: 'Suspended', label: 'Suspendido' },
];

interface EditingState {
  id: string | null;
  draft: AdminUserInput;
}

const BLANK_DRAFT: AdminUserInput = { name: '', email: '', role: 'client', company: '', status: 'Invited', sendInvite: true };

/** Gestión de usuarios y roles — no es una entrada del switch interno del panel, se navega como ruta aparte. */
@Component({
  selector: 'app-admin-users',
  imports: [Card, Badge, Button, Input, Select, Wordmark],
  templateUrl: './admin-users.html',
  styleUrl: './admin-users.css',
})
export class AdminUsers implements OnInit {
  private readonly router = inject(Router);
  private readonly toast = inject(ToastService);
  private readonly dialog = inject(DialogService);
  private readonly usersService = inject(UsersService);

  readonly roles = ROLES;
  readonly roleMeta = ROLE_META;
  readonly statusTone = STATUS_TONE;
  readonly statusLabel = STATUS_LABEL;
  readonly statusOptions = STATUS_OPTIONS;

  readonly users = this.usersService.users;
  readonly filter = signal<'todos' | AdminUserRole>('todos');
  readonly query = signal('');
  readonly editing = signal<EditingState | null>(null);
  readonly saving = signal(false);

  readonly isNew = computed(() => this.editing()?.id === null);

  readonly counts = computed(() => ({
    todos: this.users().length,
    admin: this.users().filter((u) => u.role === 'admin').length,
    client: this.users().filter((u) => u.role === 'client').length,
  }));

  readonly shown = computed(() => {
    const f = this.filter();
    const q = this.query().trim().toLowerCase();
    return this.users().filter((u) => {
      const okRole = f === 'todos' || u.role === f;
      const okQ = !q || `${u.name} ${u.email} ${u.company}`.toLowerCase().includes(q);
      return okRole && okQ;
    });
  });

  ngOnInit(): void {
    this.usersService.load();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.editing()) this.closeDrawer();
  }

  filterClasses(id: 'todos' | AdminUserRole): string {
    const on = this.filter() === id;
    return [
      'inline-flex cursor-pointer items-center gap-2 rounded-pill border-[1.5px] px-4 py-2.5 font-body text-[14.5px] transition-all duration-150 ease-out',
      on ? 'border-brand-orange bg-brand-orange font-semibold text-text-on-brand shadow-brand' : 'border-border-default bg-surface-card font-medium text-text-body',
    ].join(' ');
  }

  initials(name: string): string {
    return name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  }

  openNew(): void {
    this.editing.set({ id: null, draft: { ...BLANK_DRAFT } });
  }

  openEdit(u: AdminUser): void {
    this.editing.set({ id: u.id, draft: { name: u.name, email: u.email, role: u.role, company: u.company, status: u.status, sendInvite: true } });
  }

  closeDrawer(): void {
    if (this.saving()) return;
    this.editing.set(null);
  }

  onBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.closeDrawer();
  }

  setField<K extends keyof AdminUserInput>(key: K, value: AdminUserInput[K]): void {
    this.editing.update((e) => (e ? { ...e, draft: { ...e.draft, [key]: value } } : e));
  }

  draftValid(): boolean {
    const draft = this.editing()?.draft;
    return !!draft && draft.name.trim().length > 0 && /.+@.+\..+/.test(draft.email);
  }

  save(): void {
    const e = this.editing();
    if (!e || !this.draftValid() || this.saving()) return;
    this.saving.set(true);
    const isNew = e.id === null;
    const request$ = isNew ? this.usersService.create(e.draft) : this.usersService.update(e.id as string, e.draft);
    request$.subscribe({
      next: (user) => {
        this.saving.set(false);
        this.editing.set(null);
        this.toast.success(isNew ? 'Usuario creado' : 'Usuario actualizado', `"${user.name}" · ${this.roleMeta[user.role].label}`);
      },
      error: () => {
        this.saving.set(false);
        this.toast.error('No pudimos guardar el usuario', 'Inténtalo nuevamente en unos momentos.');
      },
    });
  }

  async deleteFromDrawer(): Promise<void> {
    const e = this.editing();
    if (!e || e.id === null) return;
    const id = e.id;
    const name = e.draft.name;
    const confirmed = await this.dialog.confirm({
      tone: 'danger',
      title: '¿Eliminar usuario?',
      message: `"${name}" dejará de tener acceso a la plataforma. Esta acción no se puede deshacer.`,
      confirmLabel: 'Sí, eliminar',
      cancelLabel: 'Cancelar',
    });
    if (!confirmed) return;
    this.usersService.remove(id).subscribe({
      next: () => {
        this.editing.set(null);
        this.toast.success('Usuario eliminado', `"${name}" perdió el acceso.`);
      },
      error: () => this.toast.error('No pudimos eliminar el usuario', 'Inténtalo nuevamente en unos momentos.'),
    });
  }

  goToPanel(): void {
    this.router.navigateByUrl('/admin');
  }
}
