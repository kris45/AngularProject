import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';

import { ChartComponent } from './chart/chart.component';
import { ChartService } from './services/chart.service';


@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [
    ChartComponent
  ],
  providers: [ChartService],
  exports: [
    ChartComponent
  ]
})
export class CustomChartModule { }
