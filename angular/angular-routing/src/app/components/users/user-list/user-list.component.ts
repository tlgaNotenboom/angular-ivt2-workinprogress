import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = []; 
  title = 'Users ListComponent'

  constructor(
    private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit() {
    // Dit was onze eerste benadering, maar die werkt niet meer 
    // nu we via Http naar een API gaan.
    // this.users = this.userService.getAllUsers();

    // Nieuwe benadering: subscribe op de data van een Observable
    this.userService.getAllUsers().subscribe(result => this.users = result);
  }


}
