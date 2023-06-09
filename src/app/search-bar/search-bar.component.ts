import { Component, EventEmitter, Output } from '@angular/core';
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
    this.submitted.emit(this.term);
  }
}
