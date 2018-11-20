import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-template',
  templateUrl: './school-template.component.html',
  styleUrls: ['./school-template.component.css']
})
export class SchoolTemplateComponent implements OnInit {

  name: string = '';
  address: string = '';
  maxNumberOfStudents: number;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
      console.log(`Created ${this.name}`);


  }


}
