import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CityRoutingModule} from './city-routing.module';
import {CityComponent} from "./city.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CityControllerService} from "../../swagger";


@NgModule({
  declarations: [
    CityComponent,

  ],
  imports: [
    FormsModule,
    CommonModule,
    CityRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    CityControllerService
  ]
})
export class CityModule {
}
