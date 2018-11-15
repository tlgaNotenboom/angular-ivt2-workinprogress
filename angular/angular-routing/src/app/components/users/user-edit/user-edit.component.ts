import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  title: string;
  // editMode switches between editing existing user or creating a new user.
  // Default is false (= create new user)
  editMode: boolean;
  id: number;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'] || 'Edit User';
    this.editMode = this.route.snapshot.data['userAlreadyExists'] || false;
    // Get the data statically - changes are not reflected.
    // this.id = +this.route.snapshot.paramMap.get('id');

    // Subscribe to changes in route params - get updates on route params.
    this.route.params.subscribe((params) => {
      // If in edit mode, get the id of the user
      if(params['id']) {
        this.id = +params['id'];
        console.log('Get the user ' + this.id);
        // Get user data from service - next lesson
        this.user = {}
      }
    });
  }

  saveUser(): void {
    console.log('Save user');
    // Save user via the service
    // Then navigate back to display view (= UserDetails).
    // The display view must then show the new or edited user.
    this.router.navigate(['..'], { relativeTo: this.route });
  }

}
