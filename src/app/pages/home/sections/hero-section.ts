import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../../../ui/actions/button/button';
import { CmsContentService } from '../../../core/cms-content.service';

@Component({
  selector: 'app-hero-section',
  imports: [Button],
  templateUrl: './hero-section.html',
})
export class HeroSection {
  private readonly router = inject(Router);
  private readonly cms = inject(CmsContentService);

  readonly content = this.cms.section('hero');
  readonly stack = computed(() => this.content().items.split('\n').map((item) => item.trim()).filter(Boolean));

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
