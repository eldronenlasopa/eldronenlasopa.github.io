import { Component, computed, input, output } from '@angular/core';

let uid = 0;

export type SelectOption = string | { value: string; label: string };

/** Labeled dropdown with a custom chevron. Options accept string[] or {value,label}[]. */
@Component({
  selector: 'app-select',
  templateUrl: './select.html',
})
export class Select {
  readonly label = input<string>();
  readonly hint = input<string>();
  readonly error = input<string>();
  readonly id = input<string>();
  readonly value = input('');
  readonly options = input<SelectOption[]>([]);
  readonly placeholder = input('Selecciona…');
  readonly disabled = input(false);
  readonly required = input(false);

  readonly valueChange = output<string>();

  private readonly generatedId = `app-select-${++uid}`;
  readonly fieldId = computed(() => this.id() || this.generatedId);

  readonly normalizedOptions = computed(() =>
    this.options().map((o) => (typeof o === 'string' ? { value: o, label: o } : o)),
  );

  readonly fieldClasses = computed(() =>
    [
      'w-full box-border appearance-none px-3.5 py-3 pr-10 font-body text-[15px] rounded-md border-[1.5px] outline-none',
      'transition-[border-color,box-shadow] duration-200 ease-out',
      this.disabled() ? 'bg-surface-sunken cursor-not-allowed' : 'bg-surface-card cursor-pointer',
      this.value() ? 'text-text-body' : 'text-text-faint',
      this.error()
        ? 'border-danger focus:border-danger focus:shadow-[0_0_0_4px_var(--danger-tint)]'
        : 'border-border-default focus:border-border-focus focus:shadow-[0_0_0_4px_var(--focus-ring)]',
    ].join(' '),
  );

  onChange(event: Event): void {
    this.valueChange.emit((event.target as HTMLSelectElement).value);
  }
}
