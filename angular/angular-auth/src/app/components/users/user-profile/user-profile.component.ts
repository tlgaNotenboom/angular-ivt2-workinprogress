import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserService } from '../users.service';
import { AuthService } from '../../auth/auth.service';
import { Subscription, Observable } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styles: []
})
export class UserProfileComponent implements OnInit {

  title: string;
  id: number;
  user: User;
  isLoggedIn$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  isActive: boolean;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'] || 'User Details';
    this.isLoggedIn$ = this.authService.userIsLoggedIn;
    this.isAdmin$ = this.authService.userIsAdmin;

    // Get my user information - get from server, based on JWT token
    
    // this.userService.read().subscribe(
    //   user => this.user = new User(user)
    // )
  }

}
