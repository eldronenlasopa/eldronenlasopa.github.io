import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
})

export class HeroComponent {
    @Input() fields: any;

    constructor() {}
}
