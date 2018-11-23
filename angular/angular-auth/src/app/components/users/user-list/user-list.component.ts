import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../users.service';
import { AlertService } from 'src/app/modules/alert/alert.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = 'Users ListComponent'
  users: User[];

  constructor(
    private alertService: AlertService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      users => this.users = users,
      error => {
        console.log(error)
        this.alertService.error('<strong>Connection error:</strong> ' + error + '<br/>(Is de server bereikbaar?)')
      }
    );
  }

}
