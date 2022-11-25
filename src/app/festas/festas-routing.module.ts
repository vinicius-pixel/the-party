import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FestasPage } from './festas.page';


const routes: Routes = [
  {
    path: '',
    component: FestasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FestasPageRoutingModule {}
