import { CommonModule } from '@angular/common';
import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss'],
    standalone: true,
    imports: [
        CommonModule
    ]
})
export class FeaturesComponent {
  @Input() fields: any;

  constructor() {
  }
}
