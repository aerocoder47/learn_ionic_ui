import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageIonAlertPage } from './page-ion-alert.page';

const routes: Routes = [
  {
    path: '',
    component: PageIonAlertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageIonAlertPageRoutingModule {}
