import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MontechargePageRoutingModule } from './montecharge-routing.module';

import { MontechargePage } from './montecharge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MontechargePageRoutingModule
  ],
  declarations: [MontechargePage]
})
export class MontechargePageModule {}
