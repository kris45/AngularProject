import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from '../signIn-form/services/authorization.guard';

const routes: Routes = [
  {
    path: 'personalInfo',
    component: PersonalInfoComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    PersonalInfoComponent
  ],
  providers: [],
  exports: [
    PersonalInfoComponent,
    RouterModule
  ]
})
export class PersonalInfoModule { }
