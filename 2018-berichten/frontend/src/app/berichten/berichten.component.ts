import { Component, OnInit } from '@angular/core';
import { BerichtService } from '../services/bericht.service';
import { Bericht } from '../model/bericht.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-berichten',
  templateUrl: './berichten.component.html',
  styleUrls: ['./berichten.component.css']
})
export class BerichtenComponent implements OnInit {

  berichten: Observable<Bericht[]>
  gekozenBericht: Bericht = null;

  constructor(private berichtService: BerichtService) { }

  ngOnInit() {
    this.berichten = this.berichtService.getBerichten();
  }

  onBericht(bericht: Bericht){
    this.gekozenBericht = bericht;
    console.log(this.gekozenBericht)
  }

  ngOnExit() {
  }

}
