import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailschantierPageRoutingModule } from './detailschantier-routing.module';

import { DetailschantierPage } from './detailschantier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailschantierPageRoutingModule
  ],
  declarations: [DetailschantierPage]
})
export class DetailschantierPageModule {}
