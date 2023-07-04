import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters:Character[] = [{
    id:uuid(),
    name:'Krillin',
    power:1000
  },{
    id:uuid(),
    name:'Goku',
    power:9500
  },{
    id:uuid(),
    name:'Vegeta',
    power:7500
  }];

  addCharacter( character:Character ):void{
    const newCharacter:Character = {id:uuid(), ...character}
    this.characters.push(newCharacter);
  }

  // onDeleteId(index:number):void{
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(x => x.id!==id);
    // const characterDelete = this.characters.filter(x=> x.id===id);
    // const indexDelete = this.characters.indexOf(characterDelete[0]);
    // this.characters.splice(indexDelete,1);
  }

}
