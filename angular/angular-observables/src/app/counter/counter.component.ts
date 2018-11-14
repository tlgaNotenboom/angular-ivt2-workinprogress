import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // Declaratie interval ...
  cnt$ = interval(1000);

  constructor() { }

  ngOnInit() {
    this.cnt$.subscribe( (val) => {
      console.log(`${val}`);
    });
  }

}
