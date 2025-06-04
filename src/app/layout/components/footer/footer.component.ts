import { CommonModule } from '@angular/common';
import {Component, Input} from '@angular/core';
import { ScrollTopComponent } from "../scroll-top/scroll-top.component";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [
    CommonModule,
    ScrollTopComponent
]
})
export class FooterComponent {
    @Input() menuData: any;

    constructor() {
    }

    get menuItems() {
      if (this.menuData) {
        return this.menuData.data.navigation_menu[0].menu_items;
      }
      return [];
    }
}
