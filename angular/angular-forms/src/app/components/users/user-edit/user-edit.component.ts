import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../users.service';

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

  nationalities = [
    'Netherlands',
    'German',
    'France',
    'United Kingdom'
  ]

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'] || 'Edit User';
    this.editMode = this.route.snapshot.data['userAlreadyExists'] || false;
    // Get the data statically - changes are not reflected.
    // this.id = +this.route.snapshot.paramMap.get('id');

    if(this.editMode){
      // Subscribe to changes in route params. When the route changes we get updates on route params.
      this.route.params.subscribe((params) => {
        if (params['id']) {
          // Subscribe for available users. Once users are available we get our specific user.
        }
      });
    } else {
      // Create a new empty user. The required properties are filled 
      // with empty values by the usermodel.
      this.user = new User({
        name: {
          title: 'mr',
          first: 'Robin',
          last: 'Schellius'
        },
        email: 'rs@server.com'
      });
    }
  }

  onSubmit(){
    console.log('Submitted');
  }

}
