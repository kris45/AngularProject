import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelsComponent } from './labels/labels.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'labels', component: LabelsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    LabelsComponent
  ],
  providers: [],
  exports: [
    LabelsComponent,
    RouterModule
  ]
})
export class LabelsModule { }
