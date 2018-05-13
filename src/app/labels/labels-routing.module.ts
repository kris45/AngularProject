import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LabelsComponent } from './labels/labels.component';

const routes: Routes = [
  { path: 'labels', component: LabelsComponent }
];

export const labelsRouterComponents = [ LabelsComponent ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LabelsRoutingModule { }
