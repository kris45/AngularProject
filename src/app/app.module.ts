import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { BrandsInfoModule } from './brands-info/brands-info.module';
import { PersonalInfoModule } from './personal-info/personal-info.module';
import { LabelsModule } from './labels/labels.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { AuthModule } from './authorization/auth.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule,

    CoreModule,
    AuthModule,
    HeaderModule,
    BrandsInfoModule,
    ContactUsModule,
    PersonalInfoModule,
    LabelsModule,
    SidebarModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
