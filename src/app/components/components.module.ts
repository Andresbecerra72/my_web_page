import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './cards-group/cards-group.component';
import { GridImgComponent } from './grid-img/grid-img.component';



@NgModule({
  declarations: [
    CardComponent,
    GridImgComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    GridImgComponent
  ]
})
export class ComponentsModule { }
