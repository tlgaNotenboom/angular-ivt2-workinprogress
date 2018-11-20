import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginInvalid = false;
  
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) {}

  onSubmit() {
    const username = this.loginForm.value['username'];
    const password = this.loginForm.value['password'];
    if ( this.authenticationService.login(username, password) ) {
      this.router.navigate(['/dashboard']);
    }
    this.loginInvalid = true;
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, 
        [Validators.required, this.valideUsername.bind(this)]),
      'password': new FormControl(null, [Validators.required, this.validePassword.bind(this)]),
    });
    this.authenticationService.logout();
  }

  valideUsername(control: FormControl): {[s: string]: boolean} {
    const username = control.value;
    const regexp = new RegExp('^[a-zA-Z]([a-zA-Z0-9]){2,14}');
    const test = regexp.test(username);
    if (regexp.test(username) !== true) {
      return {username: false};
    } else {
      return null;
    }
  }

  validePassword(control: FormControl): {[s: string]: boolean} {
    const password = control.value;
    const regexp = new RegExp('^[a-zA-Z]([a-zA-Z0-9]){2,14}');
    const test = regexp.test(password);
    if (regexp.test(password) !== true) {
      return {username: false};
    } else {
      return null;
    }
  }
}

