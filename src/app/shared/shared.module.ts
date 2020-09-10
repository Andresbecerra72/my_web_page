import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
      FooterComponent,
      SidebarComponent,
      HeaderComponent
    ],
  imports: [
    CommonModule,
    RouterModule, // modulo para navegacion
  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
