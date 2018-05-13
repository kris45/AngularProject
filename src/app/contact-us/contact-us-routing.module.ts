import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: 'contactUs', component: ContactUsComponent }
];

export const contactUsRouterComponents = [ ContactUsComponent ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactUsRoutingModule { }
