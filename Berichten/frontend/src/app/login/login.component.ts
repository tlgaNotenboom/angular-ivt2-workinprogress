import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginInvalid = false;
  
  constructor( 
    private authService: AuthService, 
    private router: Router) {}

  onSubmit() {
    const email = this.loginForm.value['email'];
    const password = this.loginForm.value['password'];

    this.authService.login(email, password).subscribe ( 
      (res) => {
        this.router.navigate(['/berichten'])
        this.loginInvalid = false;
      },
      (err) => {
        console.log(err)
      }
    )
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, 
        [Validators.required, this.validateEmail.bind(this)]),
      'password': new FormControl(null, 
        [Validators.required, this.validatePassword.bind(this)]),
    });
    this.authService.logout();
  }

  validateEmail(control: FormControl): {[s: string]: boolean} {
    const email = control.value;
    const regexp = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
    if (regexp.test(email) !== true) {
      return {email: false};
    } else {
      return null;
    }
  }

  validatePassword(control: FormControl): {[s: string]: boolean} {
    const password = control.value;
    const regexp = new RegExp('^[a-zA-Z]([a-zA-Z0-9]){2,14}$');
    if (regexp.test(password) !== true) {
      return {username: false};
    } else {
      return null;
    }
  }
}

