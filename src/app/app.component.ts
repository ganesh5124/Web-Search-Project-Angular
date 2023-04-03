import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pages = [];
  constructor(
    private wikipedia: WikipediaService
  ){}

  onTermSearch(value:string){
    const results = this.wikipedia.onSearchValue(value).subscribe((pages:any)=>{
      this.pages= pages
    });
  }
}
