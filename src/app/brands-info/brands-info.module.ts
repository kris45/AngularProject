import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule, FormGroup} from '@angular/forms';

import {StatisticDescriptionComponent} from './statistic-description/statistic-description.component';
import {BrandsComponent} from './statistic-description/brands/brands.component';
import {BrandsService} from './services/brands.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    StatisticDescriptionComponent,
    BrandsComponent
  ],
  providers: [
    BrandsService
  ],
  exports: [
    StatisticDescriptionComponent
  ]
})
export class BrandsInfoModule { }
