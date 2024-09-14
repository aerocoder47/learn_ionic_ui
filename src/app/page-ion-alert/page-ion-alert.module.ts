import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageIonAlertPageRoutingModule } from './page-ion-alert-routing.module';

import { PageIonAlertPage } from './page-ion-alert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageIonAlertPageRoutingModule
  ],
  declarations: [PageIonAlertPage]
})
export class PageIonAlertPageModule {}
