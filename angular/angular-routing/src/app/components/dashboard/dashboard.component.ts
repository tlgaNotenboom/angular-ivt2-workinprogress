import { Component, OnInit } from '@angular/core';
import { throwIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Dashboard';
  
  constructor() { }

  ngOnInit() {
  }

  reverse() {
    this.title = this.title.split('').reverse().join('');
  }

}
