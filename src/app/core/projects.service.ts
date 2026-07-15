import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from './api.service';
import type { ApiProject } from './models/api.models';
import { Project } from './projects-data';

function toProject(project: ApiProject): Project {
  return {
    slug: project.slug, title: project.title, client: project.clientName, cat: project.category, year: String(project.year),
    color: project.category === 'Landing' ? '#F7C948' : project.category === 'Web' ? '#FF6B35' : '#22D3EE',
    tags: project.tags ?? [], metric: `${project.progress}% avance`, glyph: project.category === 'Landing' ? '▲' : '◈', duration: 'A medida',
    desc: project.description, summary: project.description, challenge: 'Estamos entendiendo el reto operativo de este proyecto.',
    solution: 'Construimos una solución digital a medida y medimos su avance con el equipo.',
    results: [[`${project.progress}%`, 'avance'], [project.status, 'estado'], [String(project.year), 'año']],
  };
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly api = inject(ApiService);
  list(): Observable<Project[]> { return this.api.projects().pipe(map(items => items.map(toProject))); }
  clientList(): Observable<Project[]> { return this.api.clientProjects().pipe(map(items => items.map(toProject))); }
  bySlug(slug: string): Observable<Project> { return this.api.project(slug).pipe(map(toProject)); }
}
