import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FestasPageRoutingModule } from './festas-routing.module';
import { FestasPage } from './festas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FestasPageRoutingModule
  ],
  declarations: [FestasPage]
})
export class FestasPageModule {}
