import { Component, EventEmitter, Output } from '@angular/core';
import { tap } from 'rxjs';
@Component({
  selector: 'searchBar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<String>();
  term = '';

  onChangeText(event: any) {
    const value = event.target.value;
    this.term = value;
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    console.log(this.term);
    console.log(this.submitted);
    this.submitted.emit(this.term);
  }
}
