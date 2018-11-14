import { Component, OnInit, Input } from '@angular/core';
import { Furby } from '../models/furby';

@Component({
  selector: 'app-furby-detail',
  templateUrl: './furby-detail.component.html',
  styleUrls: ['./furby-detail.component.scss']
})
export class FurbyDetailComponent implements OnInit {

  @Input() furby: Furby;
  
  constructor() { }

  ngOnInit() {
  }

}
