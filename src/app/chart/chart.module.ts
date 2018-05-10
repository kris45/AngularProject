import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';

import { ChartComponent } from './chart/chart.component';


@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [
    ChartComponent
  ],
  providers: [],
  exports: [
    ChartComponent
  ]
})
export class CustomChartModule { }
