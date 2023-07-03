import { Character } from './../../interfaces/character.interface';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList:Character[] =[
    {
      name:'Trunks',
      power:10
    }
  ];
  @Output()
  onDeleteId:EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index:number):void{
    // TODO: Emitir el ID del personaje
    this.onDeleteId.emit(index);
    // this.characterList.splice(index,1);
  }

}
