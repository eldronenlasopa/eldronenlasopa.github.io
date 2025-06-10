import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-courses-section',
    standalone: true,
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.scss',
    imports: [
        CommonModule,
        MatIconModule
    ]
})

export class CoursesComponent {
    @Input () courses: any;

    onClick(slug: string) {
    }

}
