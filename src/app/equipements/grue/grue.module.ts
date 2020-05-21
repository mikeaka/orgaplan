import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GruePageRoutingModule } from './grue-routing.module';

import { GruePage } from './grue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GruePageRoutingModule
  ],
  declarations: [GruePage]
})
export class GruePageModule {}
