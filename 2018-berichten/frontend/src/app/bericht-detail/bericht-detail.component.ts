import { Component, OnInit, Input } from '@angular/core';
import { Bericht } from '../model/bericht.model';

@Component({
  selector: 'app-bericht-detail',
  templateUrl: './bericht-detail.component.html',
  styleUrls: ['./bericht-detail.component.css']
})
export class BerichtDetailComponent implements OnInit {

  @Input() bericht: Bericht;

  constructor() { }

  ngOnInit() {
  }

}
