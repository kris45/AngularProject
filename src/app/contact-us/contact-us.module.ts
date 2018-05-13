import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { contactUsRouterComponents , ContactUsRoutingModule } from './contact-us-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContactUsRoutingModule
  ],
  declarations: [
    contactUsRouterComponents
  ],
  providers: [],
  exports: [
    contactUsRouterComponents,
  ]
})
export class ContactUsModule { }
