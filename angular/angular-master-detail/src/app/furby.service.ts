import { Injectable, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Furby } from './models/furby';

@Injectable({
  providedIn: 'root'
})
export class FurbyService {

  private furbies : Furby[] = []
  
  // Let op: vullen van de databron werkt niet vanuit ngOnInit(). Deze laatste
  // is alleen gedefineerd voor Directives en Components. 
  // Zie ook Lifecycle hooks: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
  constructor() {
    this.fillWithFurbyData();
  }

  getFurbiesAsync(): Observable<Furby> {
    return from(this.furbies);
  }

  getFurbiesSync(): Furby[] {
    return this.furbies;
  }

  fillWithFurbyData() {
    this.furbies.push( new Furby("Kiwi", 10,"wee-tah-kah-loo-loo","furby1.png"));
    this.furbies.push( new Furby("Sleep", 8,"wee-tah-kah-wee-loo","furby2.png"));
    this.furbies.push( new Furby("Fire Sparke", 2,"wee-tee-kah-wah-tee","furby3.png"));
    this.furbies.push( new Furby("Handy Feet", 2,"u-nye-loo-lay-doo?","furby4.png"));
    this.furbies.push( new Furby("Motor Mouth", 2,"u-nye-ay-tay-doo?","furby5.png"));
    this.furbies.push( new Furby("Baby Cupcake", 5,"u-nye-boh-doo?","furby6.png"));
    this.furbies.push( new Furby("Little Monster", 5,"u-nye-way-loh-nee-way","furby7.png"));
    this.furbies.push( new Furby("Belly Button", 3,"u-nye-noh-lah","furby8.png"));
    this.furbies.push( new Furby("Fuzzy Pumpkin", 8,"doo?","furby9.png"));
    this.furbies.push( new Furby("Moon Tiger", 7,"doo-dah","furby10.png"));
  }

}
