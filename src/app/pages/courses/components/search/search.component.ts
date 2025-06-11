import { CommonModule } from '@angular/common';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    standalone: true,
    imports: [
        CommonModule
    ]
})
export class SearchComponent implements OnInit {

  @Output() searchChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: any) {
    if (event.target.search.value) {
      this.searchChange.emit(event.target.search.value);
    }
  }

}
