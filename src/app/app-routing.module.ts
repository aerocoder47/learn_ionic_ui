import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'page-ion-alert',
    pathMatch: 'full'
  },
  {
    path: 'page-ion-accordian',
    loadChildren: () => import('./page-ion-accordian/page-ion-accordian.module').then( m => m.PageIonAccordianPageModule)
  },
  {
    path: 'page-ion-alert',
    loadChildren: () => import('./page-ion-alert/page-ion-alert.module').then( m => m.PageIonAlertPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
