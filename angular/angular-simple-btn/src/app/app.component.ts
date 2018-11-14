import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  cnt: number = 0
  msg: string

  onKlikDan() {
    this.cnt++
    console.log("Er is " + this.cnt + " geklikt")
    this.msg = "Er is " + this.cnt + " geklikt"
  }






  
  // msg : string;
  // cnt : number = 0;

  // onClick() {
  //   this.cnt++;
  //   this.msg = 'Je hebt ' + this.cnt + ' geklikt';
  // }
}

