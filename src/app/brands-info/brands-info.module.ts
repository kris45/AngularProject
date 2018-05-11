import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StatisticDescriptionComponent } from './statistic-description/statistic-description.component';
import { BrandsComponent } from './statistic-description/brands/brands.component';
import { BrandsService } from './services/brands.service';
import { CustomChartModule } from '../chart/chart.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: StatisticDescriptionComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomChartModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    StatisticDescriptionComponent,
    BrandsComponent
  ],
  providers: [
    BrandsService
  ],
  exports: [
    StatisticDescriptionComponent,
    RouterModule
  ]
})
export class BrandsInfoModule { }
