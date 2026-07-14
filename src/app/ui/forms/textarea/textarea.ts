import { Component, computed, input, output } from '@angular/core';

let uid = 0;

/** Multi-line text field. Same label/hint/error contract as Input. */
@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.html',
})
export class Textarea {
  readonly label = input<string>();
  readonly hint = input<string>();
  readonly error = input<string>();
  readonly id = input<string>();
  readonly value = input('');
  readonly placeholder = input<string>();
  readonly rows = input(4);
  readonly disabled = input(false);
  readonly required = input(false);

  readonly valueChange = output<string>();

  private readonly generatedId = `app-textarea-${++uid}`;
  readonly fieldId = computed(() => this.id() || this.generatedId);

  readonly fieldClasses = computed(() =>
    [
      'w-full box-border resize-y px-3.5 py-3 font-body text-[15px] leading-[1.6] text-text-body rounded-md border-[1.5px] outline-none',
      'transition-[border-color,box-shadow] duration-200 ease-out',
      this.disabled() ? 'bg-surface-sunken' : 'bg-surface-card',
      this.error()
        ? 'border-danger focus:border-danger focus:shadow-[0_0_0_4px_var(--danger-tint)]'
        : 'border-border-default focus:border-border-focus focus:shadow-[0_0_0_4px_var(--focus-ring)]',
    ].join(' '),
  );

  onInput(event: Event): void {
    this.valueChange.emit((event.target as HTMLTextAreaElement).value);
  }
}
