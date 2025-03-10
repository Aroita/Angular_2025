import { Component  } from '@angular/core';
import { SideMenuHeaderComponent } from './side-menu-header/side-menu-header.component';
import { SideMenuOptionsComponent } from './side-menu-options/side-menu-options.component';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  imports: [
    SideMenuHeaderComponent,
    SideMenuOptionsComponent
  ]
})
export class SideMenuComponent{

  constructor() { }



}
