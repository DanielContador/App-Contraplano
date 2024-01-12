import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EdicionComponent } from 'src/app/components/edicion/edicion.component';
import { NoticiaComponent } from 'src/app/components/noticia/noticia.component';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'noticia',
        component:NoticiaComponent
      },
      {
        path:'edicioncom',
        component:EdicionComponent
      },
    ]



  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
