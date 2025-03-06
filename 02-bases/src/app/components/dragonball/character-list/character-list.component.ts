import {  Component, input} from '@angular/core';
import type { Character } from '../../../interfaces/character.interfaces';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',

})
export class CharacterListComponent {
  listName = input.required<string>() //mandar info del padre al hijo mediante la funcion: input()


  //mandar info del padre al hijo mediante la funcion: input()

  characters = input.required<Character[]>()




 }
