import { Component, Attribute, OnInit } from '@angular/core';
import { SierendeElementenService } from './services/sierende-elementen.service';
import { SierendElement } from './models/sierendelement';
import { GeoPoint } from './models/geopoint';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-sierende-elementen';
  //geoPoints: GeoPoint[] = [];

  constructor() {} //private ses : SierendeElementenService) {}

  ngOnInit() {
    // this.ses.getSierendeElementen().subscribe( items => {
    //   this.geoPoints = items
    //});

    // let d = this.ses.getSE()
    // console.log(d)
    // this.ses.getSierendeElementen().subscribe( data => {
    //   console.log( data)
    //})
    
  }
}
