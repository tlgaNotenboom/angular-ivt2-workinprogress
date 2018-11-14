import { Component } from '@angular/core';
import { Observable, of, from, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-obserable-examples';
  names = ['John', 'jane', 'Diederich'];
  
  namesObservable: Observable<string> = from(this.names)
  
  namesObserver = {
    next: item => console.log( 'naam ' + item ),
    err: err => console.log( 'er is een error opgetreden: ' + err),
    complete: () => console.log('klaar (complete notification')
  };

  ngOnInit(){

    //this.namesObservable.subscribe(this.namesObserver);

    this.namesObservable.subscribe( 
      item => console.log( 'naam ' + item ),
      err => console.log( 'er is een error opgetreden: ' + err),
      () => console.log('klaar (complete notification)')
    );


  }

}
