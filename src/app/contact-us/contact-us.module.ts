import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'contactUs',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    ContactUsComponent
  ],
  providers: [],
  exports: [
    ContactUsComponent,
    RouterModule
  ]
})
export class ContactUsModule { }
