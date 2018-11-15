import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  title = 'User Detail';
  id = -1;
  user: User;
  
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Get the data statically - changes are not reflected.
    // this.id = +this.route.snapshot.paramMap.get('id');

    // Subscribe to changes in route params - get updates on route params.
    this.route.params.subscribe((params) => {
      if(params['id']){
        this.id = +params['id'];
        console.log('Get the user ' + this.id);
        // Get user data from service - next lesson
        this.user = {}
      }
    });

  }

}
