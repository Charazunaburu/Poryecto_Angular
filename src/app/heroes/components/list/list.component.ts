import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:nameAgeHero[] = [{
    name:'spiderman',
    age:25,
  },{
    name:'Ironman',
    age:45,
  },{
    name:'Hulk',
    age:40,
  },{
    name:'She Hulk',
    age:30,
  },{
    name:'Thor',
    age:1500,
  }];
  public deletedHero?:string ='';

  removeLastHero():void{
    const heroDeleted = this.heroNames.pop();
    this.deletedHero = heroDeleted?.name;
    console.log(this.deletedHero);
  }
}

interface nameAgeHero {
  name:string,
  age:number
}
