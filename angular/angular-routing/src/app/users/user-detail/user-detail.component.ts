import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/users/user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailsComponent implements OnInit {

  selectedUser: User;
  title: string = 'User Detail';
  id: number = -1;
  
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit() {
    // does this work?
    // this.id = +this.route.snapshot.paramMap.get('id');

    this.route.params.subscribe((params) => {
      this.id = + params['id'];
      this.selectedUser = this.userService.getUser(this.id);
    });

  }
}