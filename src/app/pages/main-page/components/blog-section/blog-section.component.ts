import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-blog-section',
    templateUrl: './blog-section.component.html',
    styleUrls: ['./blog-section.component.scss'],
    standalone: true,
    imports: [
        CommonModule
    ]
})
export class BlogSectionComponent {

    @Input() posts: any;

    constructor(
        private router: Router
    ) {}

    onClick(slug: string) {
        this.router.navigate(['blog', slug]);
    }

}
