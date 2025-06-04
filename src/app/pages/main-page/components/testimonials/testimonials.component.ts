import {AfterViewInit, Component, Input} from '@angular/core';
import {tns} from 'tiny-slider';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.scss'],
    standalone: true,
    imports: [
        CommonModule
    ]
})
export class TestimonialsComponent implements AfterViewInit {

    @Input() fields: any;

    constructor() {
    }

    ngAfterViewInit(): void {
        tns({
            container: '.testimonial-active',
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayButtonOutput: false,
            mouseDrag: true,
            gutter: 0,
            nav: false,
            navPosition: 'bottom',
            controls: true,
            controlsText: [
                '<i class="lni lni-chevron-left"></i>',
                '<i class="lni lni-chevron-right"></i>',
            ],
            items: 1,
        });
    }

}
