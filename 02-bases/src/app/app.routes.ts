import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
// import { ProjectsComponent } from './pages/projects/projects.component';
// import { SkillsComponent } from './pages/skills/skills.component';
// import { ContactComponent } from './pages/contact/contact.component';
import { DragonballComponent } from './pages/dragonball/dragonball.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';


export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent

  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'dragonball',
    component: DragonballComponent
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent
  },

  // {
  //   path: 'projects',
  //   component: ProjectsComponent
  // },
  // {
  //   path: 'skills',
  //   component: SkillsComponent
  // },
  // {
  //   path: 'contact',
  //   component: ContactComponent

  // },

  //redireccionar a la pagina principal si no se encuentra la ruta
{
  path: '**',
  redirectTo: ''
},







];
