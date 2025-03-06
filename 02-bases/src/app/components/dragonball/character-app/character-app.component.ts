import {  Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interfaces';

@Component({
  selector: 'app-character-app',
  imports: [],
  template: `<p>character-app works!</p>`,
  styleUrl: './character-app.component.css',

})
export class CharacterAppComponent {

name = signal('');
power = signal(0);

newCharacter = output<Character>();

//
addCharacter() {
  //condicion: si no hay nombre o poder o el poder es menor o igual a 0, NO se añade el personaje
  if (!this.name() || !this.power() || this.power() <= 0) {
    return;
  }

  //PERO SI TENEMOS PODER (numero), añadimos un nuevo personaje al array de personajes
  //crea un nuevo objeto de tipo Character que lo asigna a la constante newCharacter con los valores de name y power
  const newCharacter: Character = {
    // id: this.characters().length + 1,
    id: Math.floor(Math.random() * 1000),
    name: this.name(),
    power: this.power(),

  };

//añade el nuevo personaje al array de personajes y visualiza en memoria no fijo
  //this.characters().push(newCharacter);

  //this.characters.update((list) => [...list, newCharacter]);
  this.newCharacter.emit(newCharacter);
  console.log({ newCharacter });
  this.resetFields();
}

resetFields() {
  this.name.set('');
  this.power.set(0);
}



}
