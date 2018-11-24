import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profileForm: FormGroup;

  roles = ['admin', 'mod', 'user'];
  
  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: this.fb.group({
        first: ['', Validators.required],
        last: ['', Validators.required]
      }),
      email: ['', [Validators.required, Validators.email]],
      birthDate: [''],
      role: [''],
      likesWebdev: [50],
      termsAgreed: [false, Validators.requiredTrue],
      announcements: [true, Validators.required],
      hobbies: this.fb.array([this.fb.control('')]),
    });

    this.profileForm.valueChanges.subscribe(console.log);
  }

  ngOnInit() {
  }

  addHobby() {
    (this.profileForm.get('hobbies') as FormArray).push(this.fb.control(''));
  }

  removeHobby(i: number) {
    (this.profileForm.get('hobbies') as FormArray).removeAt(i);
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

}
