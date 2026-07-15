import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Badge } from '../../../ui/data-display/badge/badge';
import { Button } from '../../../ui/actions/button/button';
import { Wordmark } from '../../../ui/brand/wordmark/wordmark';
import { WhatsAppFab } from '../../../ui/marketing/whatsapp-fab/whatsapp-fab';
import { Project } from '../../../core/projects-data';
import { ProjectsService } from '../../../core/projects.service';

@Component({
  selector: 'app-project-detail',
  imports: [Badge, Button, Wordmark, WhatsAppFab],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly projectsService = inject(ProjectsService);

  project: Project | undefined;
  loading = true;
  notFound = false;
  related: Project[] = [];
  metaRows: [string, string][] = [];

  ngOnInit(): void {
    this.route.paramMap.pipe(
      tap(() => { this.loading = true; this.notFound = false; this.project = undefined; }),
      switchMap(params => this.projectsService.bySlug(params.get('slug') ?? '')),
    ).subscribe({
      next: project => {
        this.loading = false;
        this.project = project;
        this.metaRows = [
          ['Cliente', project.client],
          ['Categoría', project.cat],
          ['Año', project.year],
          ['Duración', project.duration],
        ];
      },
      error: () => {
        this.loading = false;
        this.notFound = true;
        this.project = undefined;
        this.metaRows = [];
      },
    });
  }

  back(): void { this.router.navigate(['/proyectos']); }
  openRelated(slug: string): void { this.router.navigate(['/proyectos', slug]); }
  requestProposal(): void { this.router.navigate(['/solicitar-propuesta']); }
}
