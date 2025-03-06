import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

//1. declarar la interface de personajes de dragonball
interface Character {
  id: number;
  name: string;
  power: number;
}



@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css'
})






export class DragonballComponent {

  //2- inicializar el array de personajes de dragonball interface con signal
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 15000 },
    { id: 2, name: 'Vegeta', power: 12000 },
    { id: 3, name: 'Gohan', power: 10000 },
    { id: 4, name: 'Piccolo', power: 8000 },
    { id: 5, name: 'Trunks', power: 9000 },
    { id: 6, name: 'Goten', power: 8000 },
    { id: 7, name: 'Krillin', power: 5000 },
    { id: 8, name: 'Yamcha', power: 500 },  //añadire,os un if a Yamcha
    { id: 9, name: 'Tien', power: 400 },
    { id: 10, name: 'Chaoz', power: 2000 },

  ]);







}
