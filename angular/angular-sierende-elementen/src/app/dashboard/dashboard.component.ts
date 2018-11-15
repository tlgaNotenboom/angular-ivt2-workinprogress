import { Component, OnInit } from '@angular/core';
import { SierendeElementenService } from '../services/sierende-elementen.service';
import { GeoPoint } from '../models/geopoint';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  geoPoints: GeoPoint[] = [];
  selectedIndex: number;

  constructor(private ses : SierendeElementenService) { }

  ngOnInit() {
      this.ses.getSierendeElementen().subscribe( items => {
      this.geoPoints = items
    });
  }

  onSelectGeoPoint(index: number) {
    this.selectedIndex = index;
  }


}
