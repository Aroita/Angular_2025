import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';


export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent

  },
  {
    path: 'hero',
    component: HeroPageComponent
  },

  //redireccionar a la pagina principal si no se encuentra la ruta
{
  path: '**',
  redirectTo: ''
},

];
