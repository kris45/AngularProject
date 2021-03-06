import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelsRoutingModule, labelsRouterComponents } from './labels-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LabelsRoutingModule
  ],
  declarations: [
    labelsRouterComponents
  ],
  providers: [],
  exports: [
    labelsRouterComponents
  ]
})
export class LabelsModule { }
