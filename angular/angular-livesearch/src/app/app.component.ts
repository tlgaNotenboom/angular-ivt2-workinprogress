import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from "rxjs";
import { map, switchMap, filter, debounceTime, distinct } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Instant search';
  searchTerm: string;
  results;
  githubUrl = `https://api.github.com/search/repositories?q=${this.searchTerm}&sort=stars&order=desc`;

  latestSearch = new Subject<string>();

  constructor(
    public http: Http
  ){
    this.results = this.latestSearch.pipe(
      // wait 500 msec before processing the next change
      debounceTime(500),
      // only search if the term has not changed
      distinct(),
      // do not search for empty terms
      // so the term must be 'truthy' (true) 
      filter(term => !!term),
      // every time the term changes
      switchMap(term => this.http.get(`https://api.github.com/search/repositories?q=${this.searchTerm}&sort=stars&order=desc`)),
      map(response => response.json().items.map(item => item.name))
    )
  }
      
  newSearch(term: string) {
    this.latestSearch.next(term);
  }
}
