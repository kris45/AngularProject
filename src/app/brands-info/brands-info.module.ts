import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BrandsInfoRoutingModule, brandsRouterComponents } from './brands-info-routing.module';
import { CustomChartModule } from '../chart/chart.module';
import { BrandsComponent } from './statistic-description/brands/brands.component';
import { BrandsService } from './services/brands.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomChartModule,
    BrandsInfoRoutingModule
  ],
  declarations: [
    brandsRouterComponents, BrandsComponent
  ],
  providers: [
    BrandsService
  ],
  exports: [
    brandsRouterComponents
  ]
})
export class BrandsInfoModule { }
