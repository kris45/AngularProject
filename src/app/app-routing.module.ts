import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {LabelsComponent} from './header/labels/labels.component';
import {StatisticDescriptionComponent} from './brands-info/statistic-description/statistic-description.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: StatisticDescriptionComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'labels', component: LabelsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
