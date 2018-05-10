import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ChartComponent} from '../content/chart/chart.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ChartComponent
  ],
  providers: [],
  exports: [
    ChartComponent
  ]
})
export class ChartModule { }
