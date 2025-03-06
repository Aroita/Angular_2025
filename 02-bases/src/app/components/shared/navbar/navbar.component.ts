import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  color: string = 'blue';  //color inicial

  constructor() {
    setInterval(() => {
    //array de colores
    const colores = ['blue', 'red', 'green', 'yellow', 'orange', 'purple'];
    //Math.random() genera un decimal aleatorio entre 0 y 1, lo multiplica por la longitud del array(colores) y
    // Math.floor lo redondea entre 0 y 4
    this.color = colores[Math.floor(Math.random() * colores.length)];
    }, 2000);
  }
}



