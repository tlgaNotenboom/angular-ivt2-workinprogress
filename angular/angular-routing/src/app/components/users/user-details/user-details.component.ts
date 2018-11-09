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
  
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.id = +this.route.snapshot.paramMap.get('id');

    this.route.params.subscribe((params) => {
      this.id = + params['id'];
    });

  }

}
