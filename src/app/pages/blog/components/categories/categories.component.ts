import { CommonModule } from '@angular/common';
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
    standalone: true,
    imports: [
        CommonModule
    ]
})
export class CategoriesComponent implements OnInit {

  @Input() categories: any;
  @Output() categoryChange = new EventEmitter();

  constructor() {
  }


  ngOnInit(): void {
  }

  navigateToCategory(slug: string) {
    this.categoryChange.emit(slug);
  }

}
