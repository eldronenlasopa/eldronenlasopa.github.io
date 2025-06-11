import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { Router } from "@angular/router";

@Component({
    selector: 'app-courses-section',
    standalone: true,
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.scss',
    imports: [
        CommonModule,
        MatIconModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CoursesSectionComponent {
    @Input () courses: any;

    constructor(
      private router: Router
  ) {}

    onClick(slug: string) {
        this.router.navigate(['courses', slug]);
    }

}
