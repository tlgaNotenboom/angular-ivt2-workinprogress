import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SierendeElementenService } from '../services/sierende-elementen.service';
import { GeoPoint } from '../models/geopoint';

@Component({
  selector: 'app-dashboard-detailed',
  templateUrl: './dashboard-detailed.component.html',
  styleUrls: ['./dashboard-detailed.component.css']
})
export class DashboardDetailedComponent implements OnInit {

  id = -1;
  geoPoints : GeoPoint[] = [];

  constructor(private route: ActivatedRoute,
    private ses : SierendeElementenService) { }

  ngOnInit() {

    this.ses.getSierendeElementen().subscribe( items => {
      this.geoPoints = items
    });

    this.route.params.subscribe( (params) => {
      this.id = +params['id'];
      console.log(this.geoPoints[this.id]);
    })

  }

}
