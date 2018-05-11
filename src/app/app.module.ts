import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {SignInModule} from './signIn-form/sign-in.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { BrandsInfoModule } from './brands-info/brands-info.module';
import { PersonalInfoModule } from './personal-info/personal-info.module';
import { LabelsModule } from './labels/labels.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule,

    SignInModule,
    BrandsInfoModule,
    ContactUsModule,
    PersonalInfoModule,
    LabelsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
