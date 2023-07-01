import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title:string = 'Mi primera app de angular';
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


