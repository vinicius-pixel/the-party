import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaFestaPage } from './novafesta.page';

const routes: Routes = [
  {
    path: '',
    component: NovaFestaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaFestaRoutingModule {}
