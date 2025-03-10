import { effect, Injectable, signal } from '@angular/core';
//import { constructor } from 'jasmine';
import { Character } from '../interfaces/character.interfaces';


const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
};

@Injectable({ providedIn: 'root' })
//2 añadir signal a name y power y characters (array de personajes) y añadir el efecto para guardar en localstorage
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  //2- inicializar el array de personajes de dragonball
 // characters = signal<Character[]>([
   // { id: 1, name: 'Goku', power: 15000 },
   // { id: 2, name: 'Vegeta', power: 12000 },

  //]);


 //LOCALSTORAGE: CAFA VEZ QUE NUESTROS PERSONAJES CAMBIEN LO GRABE EN el localsorage.
  // efecto que recibe un callback y lo ejecuta cada vez que el array de personajes cambie
saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });





  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);

  }




}
