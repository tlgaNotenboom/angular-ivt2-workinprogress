import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SierendeElementenService } from '../services/sierende-elementen.service';
import { GeoPoint } from '../models/geopoint';
import { SierendElement } from '../models/sierendelement';

@Component({
  selector: 'app-dashboard-detailed',
  templateUrl: './dashboard-detailed.component.html',
  styleUrls: ['./dashboard-detailed.component.css']
})
export class DashboardDetailedComponent implements OnInit {

  se : SierendElement;

  constructor(private route: ActivatedRoute,
    private ses : SierendeElementenService) { }

  ngOnInit() {

    this.route.params.subscribe( (params) => {
      let id = +params['id'];
      
      this.ses.getSierendeElementen().subscribe( items => {
        this.se = items.find( item => item.id === (id + 1) )
      });
    })
  }

}
