import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../../../ui/actions/button/button';

const STACK = ['React', 'Node.js', 'Python', 'PostgreSQL', 'n8n', 'AWS'];

@Component({
  selector: 'app-hero-section',
  imports: [Button],
  templateUrl: './hero-section.html',
})
export class HeroSection {
  private readonly router = inject(Router);

  readonly stack = STACK;

  goToProposal(): void {
    this.router.navigateByUrl('/solicitar-propuesta');
  }

  goToProjects(): void {
    this.router.navigateByUrl('/proyectos');
  }

  goToClientArea(): void {
    this.router.navigateByUrl('/login');
  }
}
