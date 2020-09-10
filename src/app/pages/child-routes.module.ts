import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';





const childRoutes: Routes = [

  { path: '', component: HomeComponent, data: {titulo: 'Inicio'} },
  { path: 'contact', component: ContactComponent, data: {titulo: 'Contactanos'} }

];





@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule]
})
export class ChildRoutesModule { }
