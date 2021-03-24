import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// Modulos Personalizados
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

import { NopagefoundComponent } from './404/nopagefound.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // modulo de rutas personalizada
    PagesModule // modulo de paginas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
