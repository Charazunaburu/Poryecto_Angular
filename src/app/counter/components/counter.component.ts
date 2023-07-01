import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>couner: {{ counter }}</h1>
    <button (click)="decreaseBY()">-1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBY()">+1</button>
  `
})

export class CounterComponent {
  public counter:number = 10;

  increaseBY():void{
      this.counter+=1;
  }
  decreaseBY():void{
    this.counter-=1
  }
  reset():void{
    this.counter = 10;
  }
}
