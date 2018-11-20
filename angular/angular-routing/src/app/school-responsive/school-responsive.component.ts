import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-school-responsive',
  templateUrl: './school-responsive.component.html',
  styleUrls: ['./school-responsive.component.css']
})
export class SchoolResponsiveComponent implements OnInit {

  // schoolForm = new FormGroup({
  //   name : new FormControl(''),
  //   address : new FormControl(''),
  //   maxNumberOfStudents : new FormControl('')
  // });
  schoolForm = this.formBuilder.group({
    name: ['', Validators.required],
    address: [''],
    maxNumberOfStudents: ['0', [Validators.required, Validators.max(100)]]
  });



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(`Submitted ${this.schoolForm.get('name').value }`);

  }

  get MaxNumberOfStudents() {
    return this.schoolForm.get('maxNumberOfStudents');
  }
}
