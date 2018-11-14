import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
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
    private route: ActivatedRoute,
    private userService: UsersService
  ) { }

  ngOnInit() {
    // this.id = +this.route.snapshot.paramMap.get('id');

    this.route.params.subscribe((params) => {
      this.id = + params['id'];
      this.user = this.userService.getUserById(this.id);
    });

  }

}
