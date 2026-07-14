import { Component, computed, input, output } from '@angular/core';

/** Selectable/removable chip for tech stacks, filters and categories. */
@Component({
  selector: 'app-tag',
  templateUrl: './tag.html',
})
export class Tag {
  readonly selected = input(false);
  readonly clickable = input(false);
  readonly removable = input(false);

  readonly tagClicked = output<void>();
  readonly removeClicked = output<void>();

  readonly classes = computed(() =>
    [
      'inline-flex items-center gap-2 rounded-sm border px-3 py-1.5 font-body text-[13px] font-medium',
      'transition-[background,border-color] duration-200 ease-out',
      this.clickable() ? 'cursor-pointer' : 'cursor-default',
      this.selected()
        ? 'border-transparent bg-accent-primary text-text-on-brand'
        : 'border-border-default bg-surface-card text-text-body',
    ].join(' '),
  );

  onClick(): void {
    if (this.clickable()) this.tagClicked.emit();
  }

  onRemove(event: MouseEvent): void {
    event.stopPropagation();
    this.removeClicked.emit();
  }
}
