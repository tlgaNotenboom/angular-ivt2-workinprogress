import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { BerichtService } from '../services/bericht.service';

@Component({
  selector: 'app-post-bericht',
  templateUrl: './post-bericht.component.html',
  styleUrls: ['./post-bericht.component.css']
})
export class PostBerichtComponent implements OnInit {

  postBerichtForm: FormGroup;

  constructor( 
    private berichtService: BerichtService, 
    private router: Router) {}

  onPost() {
    const bericht = this.postBerichtForm.value['bericht'];
    console.log(bericht)

    this.berichtService.post(bericht).subscribe ( 
      (res) => {
        this.router.navigate(['/berichten'])
      },
      (err) => {
        console.log(err)
      }
    )
  }

  ngOnInit() {
    this.postBerichtForm = new FormGroup({
      'bericht': new FormControl(null, 
        [Validators.required, this.validateBericht.bind(this)]),
    });
  }

  validateBericht(control: FormControl): {[s: string]: boolean} {
    const bericht = control.value;
    const regexp = new RegExp('^[a-zA-Z0-9]{1,255}');
    if (regexp.test(bericht) !== true) {
      return {bericht: false};
    } else {
      return null;
    }
  }

}
