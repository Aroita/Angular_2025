import { Component} from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//import { environment } from '../../../../../environments/environment.development';
import { environment} from '@environments/environment';



@Component({
  selector: 'app-side-menu-header',
  templateUrl: './side-menu-header.component.html',
  styleUrls: ['./side-menu-header.component.css'],

})
export class SideMenuHeaderComponent {

  //crear property para almacenar el objeto environment y poder usarlo en el template
  envs = environment;

}
