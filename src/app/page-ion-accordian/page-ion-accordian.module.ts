import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageIonAccordianPageRoutingModule } from './page-ion-accordian-routing.module';

import { PageIonAccordianPage } from './page-ion-accordian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageIonAccordianPageRoutingModule
  ],
  declarations: [PageIonAccordianPage]
})
export class PageIonAccordianPageModule {}
