import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Instant search';

  // `https://api.github.com/search/repositories?q=${this.searchTerm}&sort=stars&order=desc`;

  constructor(){}
      
}
