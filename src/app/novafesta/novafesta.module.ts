import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaFestaRoutingModule } from './novafesta-routing.module';

import { NovaFestaPage } from './novafesta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaFestaRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NovaFestaPage]
})
export class NovaFestaPageModule {}
