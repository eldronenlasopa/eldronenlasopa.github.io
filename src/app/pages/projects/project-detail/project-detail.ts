import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Badge } from '../../../ui/data-display/badge/badge';
import { Button } from '../../../ui/actions/button/button';
import { Wordmark } from '../../../ui/brand/wordmark/wordmark';
import { WhatsAppFab } from '../../../ui/marketing/whatsapp-fab/whatsapp-fab';
import { PROJECTS, Project } from '../../../core/projects-data';

/** Single project case study: hero, results, challenge/solution timeline, meta strip and related work. */
@Component({
  selector: 'app-project-detail',
  imports: [Badge, Button, Wordmark, WhatsAppFab],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly project: Project | undefined = PROJECTS.find(
    (p) => p.slug === this.route.snapshot.paramMap.get('slug'),
  );

  readonly related: Project[] = this.project
    ? PROJECTS.filter((p) => p.cat === this.project!.cat && p.slug !== this.project!.slug).slice(0, 3)
    : [];

  readonly metaRows: [string, string][] = this.project
    ? [
        ['Cliente', this.project.client],
        ['Categoría', this.project.cat],
        ['Año', this.project.year],
        ['Duración', this.project.duration],
      ]
    : [];

  back(): void {
    this.router.navigate(['/proyectos']);
  }

  openRelated(slug: string): void {
    this.router.navigate(['/proyectos', slug]);
  }

  requestProposal(): void {
    this.router.navigate(['/solicitar-propuesta']);
  }
}
