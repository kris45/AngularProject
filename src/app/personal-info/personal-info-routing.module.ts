import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: 'personalInfo',
    component: PersonalInfoComponent,
    canActivate: [AuthGuard]
  }
];

export const personalInfoRouterComponents = [ PersonalInfoComponent ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PersonalInfoRoutingModule { }
