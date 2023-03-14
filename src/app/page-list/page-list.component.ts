import { Component, Input } from '@angular/core';

@Component({
  selector: 'pageList',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
    @Input() pages :any;
  }
