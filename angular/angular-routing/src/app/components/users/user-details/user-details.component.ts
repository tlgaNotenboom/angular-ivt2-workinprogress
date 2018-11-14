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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    //this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.params.subscribe(params => this.id = params['id']);
  }

}
