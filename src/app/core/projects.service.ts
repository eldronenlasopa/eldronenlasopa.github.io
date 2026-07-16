import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CmsContentService, type CmsProjectItem } from './cms-content.service';
import { Project } from './projects-data';

function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function projectGlyph(category: string): string {
  if (category === 'Landing') return '▲';
  if (category === 'Automatización') return '⬡';
  if (category === 'Integración') return '⬢';
  return '◆';
}

function toProject(project: CmsProjectItem): Project {
  return {
    slug: slugify(`${project.client}-${project.title}`),
    title: project.title,
    client: project.client,
    cat: project.cat,
    year: project.year,
    color: project.color,
    tags: [project.cat, project.client].filter(Boolean),
    metric: project.metric,
    glyph: projectGlyph(project.cat),
    logo: project.logo,
    duration: 'A medida',
    desc: project.summary,
    summary: project.summary,
    challenge: project.challenge,
    solution: project.solution,
    results: [
      [project.metric || 'A medida', 'resultado'],
      [project.cat, 'tipo'],
      [project.year, 'año'],
    ],
  };
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly cms = inject(CmsContentService);

  list(): Observable<Project[]> {
    return of(this.cms.projects().map(toProject));
  }

  clientList(): Observable<Project[]> {
    return this.list();
  }

  bySlug(slug: string): Observable<Project> {
    const projects = this.cms.projects().map(toProject);
    return of(projects.find((project) => project.slug === slug) ?? projects[0]);
  }
}
