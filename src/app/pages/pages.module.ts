import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// modulos personalizados
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { HomeComponent } from '../pages/home/home.component';
import { ContactComponent } from '../pages/contact/contact.component';




@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule, // modulo de rutas
    SharedModule, // modulo de componentes compartidos
    ComponentsModule, // modulo para el uso de componentes
  ],
  exports: [
    PagesComponent,
    HomeComponent,
    ContactComponent
  ]
})
export class PagesModule { }
