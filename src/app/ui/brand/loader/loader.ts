import { Component, DestroyRef, inject, output, signal } from '@angular/core';

interface BootLine {
  cmd: string;
  out: string | null;
}

const BOOT_LINES: BootLine[] = [
  { cmd: '$ init dronlab.system', out: null },
  { cmd: '> montando módulos de UI', out: 'ok' },
  { cmd: '> conectando servicios', out: 'ok' },
  { cmd: '> calibrando sensores', out: 'ok' },
  { cmd: '> desplegando dron', out: 'listo' },
];

/** Boot-sequence splash screen. Loops a typewriter terminal log for the showcase. */
@Component({
  selector: 'app-loader',
  templateUrl: './loader.html',
  styleUrl: './loader.css',
})
export class Loader {
  readonly completed = output<void>();
  readonly typed = signal('');
  readonly doneLines = signal<BootLine[]>([]);
  readonly currentLine = signal<BootLine | null>(BOOT_LINES[0]);
  readonly progress = signal(0);
  readonly finished = signal(false);

  private stopped = false;
  private readonly intervals: ReturnType<typeof setInterval>[] = [];
  private readonly timeouts: ReturnType<typeof setTimeout>[] = [];

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      this.stopped = true;
      this.intervals.forEach(clearInterval);
      this.timeouts.forEach(clearTimeout);
    });
    this.runLoop();
  }

  private async runLoop(): Promise<void> {
    while (!this.stopped) {
      await this.playOnce();
      if (this.stopped) return;
      await this.wait(1600);
      this.typed.set('');
      this.doneLines.set([]);
      this.currentLine.set(BOOT_LINES[0]);
      this.progress.set(0);
      this.finished.set(false);
    }
  }

  private async playOnce(): Promise<void> {
    for (const line of BOOT_LINES) {
      if (this.stopped) return;
      this.currentLine.set(line);
      await this.typeLine(line.cmd);
      if (this.stopped) return;
      await this.wait(220);
      this.doneLines.update((d) => [...d, line]);
      this.rampProgress(Math.round((this.doneLines().length / BOOT_LINES.length) * 100));
    }
    this.currentLine.set(null);
    await this.waitForProgress();
    if (this.stopped) return;
    await this.wait(700);
    this.finished.set(true);
    await this.wait(360);
    if (!this.stopped) this.completed.emit();
  }

  private typeLine(full: string): Promise<void> {
    return new Promise((resolve) => {
      this.typed.set('');
      let i = 0;
      const id = setInterval(() => {
        i += 1;
        this.typed.set(full.slice(0, i));
        if (i >= full.length) {
          clearInterval(id);
          resolve();
        }
      }, 34);
      this.intervals.push(id);
    });
  }

  private rampProgress(target: number): void {
    const id = setInterval(() => {
      const p = this.progress();
      if (p >= target) {
        clearInterval(id);
        return;
      }
      this.progress.set(Math.min(target, p + 2));
    }, 16);
    this.intervals.push(id);
  }

  private waitForProgress(): Promise<void> {
    return new Promise((resolve) => {
      const id = setInterval(() => {
        if (this.progress() >= 100) {
          clearInterval(id);
          resolve();
        }
      }, 20);
      this.intervals.push(id);
    });
  }

  private wait(ms: number): Promise<void> {
    return new Promise((resolve) => {
      const id = setTimeout(resolve, ms);
      this.timeouts.push(id);
    });
  }
}
