import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationService } from './services/authorization.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './services/authorization.guard';

const routes: Routes = [{ path: 'sign-in', component: SignInFormComponent}];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    SignInFormComponent
  ],
  providers: [AuthorizationService, AuthGuard],
  exports: [
    SignInFormComponent,
    RouterModule
  ]
})
export class SignInModule { }
