import { Injectable, signal } from '@angular/core';
//import { constructor } from 'jasmine';
import { Character } from '../interfaces/character.interfaces';

@Injectable({ providedIn: 'root' })
export class DragonballService {

  //2- inicializar el array de personajes de dragonball
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 15000 },
    { id: 2, name: 'Vegeta', power: 12000 },


  ]);

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);

  }

}
