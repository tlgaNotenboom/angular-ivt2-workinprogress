import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  title = 'User Detail';
  id = -1;

  constructor (private activedRoute: ActivatedRoute) {
  }

  ngOnInit() {
   // this.id = +this.activedRoute.snapshot.paramMap.get('id');
    this.activedRoute.params.subscribe( (params) => this.id = params['id']);
  }

}
