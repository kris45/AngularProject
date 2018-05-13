import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatisticDescriptionComponent } from './statistic-description/statistic-description.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: StatisticDescriptionComponent }
];

export const brandsRouterComponents = [ StatisticDescriptionComponent ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BrandsInfoRoutingModule { }
