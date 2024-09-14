import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageIonAccordianPage } from './page-ion-accordian.page';

const routes: Routes = [
  {
    path: '',
    component: PageIonAccordianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageIonAccordianPageRoutingModule {}
