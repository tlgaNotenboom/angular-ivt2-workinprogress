import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent } from 'rxjs';

export interface ICoord {
  x: number;
  y: number;
};

@Component({
  selector: 'app-event-handler',
  templateUrl: './event-handler.component.html',
  styleUrls: ['./event-handler.component.css']
})
export class EventHandlerComponent implements OnInit, OnDestroy {

  element = document.getElementsByClassName('mousepad');
  mouseMoves$ = fromEvent(this.element, 'mousemove');
  coord: ICoord = {x: NaN, y: Infinity};

  constructor() { }

  ngOnInit() {
    this.mouseMoves$.subscribe( (evt: MouseEvent) => {
      console.log( `(x,y) = (${evt.clientX} : ${evt.clientY})`);
      // this.coord.x = evt.clientX;
      // this.coord.y = evt.clientY;
      this.coord =  {x: evt.clientX, y: evt.clientY };
    });
  }

  ngOnDestroy() {
  }

}
