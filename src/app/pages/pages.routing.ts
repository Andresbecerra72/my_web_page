import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



import { PagesComponent } from './pages.component';



const routes: Routes = [

{
   path: 'home', // el path de las rutas es: /dashboard/progress
  component: PagesComponent,
  loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule) // Lazyload

}

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule]
})

export class PagesRoutingModule {}
