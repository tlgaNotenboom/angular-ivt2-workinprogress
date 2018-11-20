import { Component, OnInit } from '@angular/core';
import { SierendeElementenService } from '../services/sierende-elementen.service';
import { GeoPoint } from '../models/geopoint';
import { SierendElement } from '../models/sierendelement';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sierendeElementen: SierendElement[] = [];
  selectedIndex: number;

  constructor(private ses : SierendeElementenService) { }

  ngOnInit() {
      this.ses.getSierendeElementen().subscribe( items => {
      this.sierendeElementen = items
    });
  }

  onSelectGeoPoint(index: number) {
    this.selectedIndex = index;
  }


}
