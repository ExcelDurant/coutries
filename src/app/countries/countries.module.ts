import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { CountryDetailsComponent } from './country-details/country-details.component';


@NgModule({
  declarations: [
    CountriesComponent,
    SingleCountryComponent,
    CountryDetailsComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
