import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


//1. la interfaz define la estructura de los elementos del menú
interface MenuOption {
  label: string;
  sublabel: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  styleUrls: ['./side-menu-options.component.css']
})
export class SideMenuOptionsComponent {

  //ELEGIR ICONOS:  https://fontawesome.com/icons/magnifying-glass?f=classic&s=solid

  //crear una property que sea un array de objetos de la interfaz SideMenuOption e inicializarlo con un objeto
  menuOptions: MenuOption[] = [
    {
      label: 'trending',
      sublabel: 'Gifs populares',
      route: '/dashboard/trending',
      icon: 'fa-solid fa-chart-line'
    },
    //otro objeto
    {
      label: 'search',
      sublabel: 'Buscador',
      route: '/dashboard/search',
      icon: 'fa-solid fa-magnifying-glass'
    },
  ]


  constructor() { }



}
