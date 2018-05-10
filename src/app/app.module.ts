import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChartModule } from 'angular-highcharts';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppRoutingModule } from './app-routing.module';

import { LabelsComponent } from './header/labels/labels.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {BrandsInfoModule} from './brands-info/brands-info.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    FooterComponent,
    ContactUsComponent,
    LabelsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule,

    BrandsInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
