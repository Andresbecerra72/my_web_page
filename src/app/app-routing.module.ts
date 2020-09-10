import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

// modulo personalizado de Rutas Hijas
import { PagesRoutingModule } from './pages/pages.routing';


// unica ruta dentro del modulo de rutas principales
import { NopagefoundComponent } from './404/nopagefound.component';

const routes: Routes = [

  // indicaciones de rutas tomadas:
  // path: '/dashboard' PagesRouting
  // path: '/auth' AuthRouting
  { path: '', redirectTo: '/home', pathMatch: 'full'}, // path de rutas por defecto
  { path: '**', component: NopagefoundComponent},

];


@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule, // modulo de rutas hijas para las Paginas

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
