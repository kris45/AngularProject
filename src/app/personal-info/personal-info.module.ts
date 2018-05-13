import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { personalInfoRouterComponents, PersonalInfoRoutingModule } from "./personal-info-routing.module";


@NgModule({
  imports: [
    CommonModule,
    PersonalInfoRoutingModule
  ],
  declarations: [
    personalInfoRouterComponents
  ],
  providers: [],
  exports: [
    personalInfoRouterComponents
  ]
})
export class PersonalInfoModule { }
