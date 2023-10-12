import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListClassRoutingModule } from './list-class-routing.module';
import {ListClassComponent} from "./list-class.component";
import {CityControllerService, ClassControllerService} from "../../swagger";
import { DistrictControllerService } from 'src/app/swagger/api/districtController.service';
import { LevelSchoolControllerService } from 'src/app/swagger/api/levelSchoolController.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListClassComponent],
  imports: [
    CommonModule,
    ListClassRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    ClassControllerService,
    CityControllerService,
    DistrictControllerService,
    LevelSchoolControllerService
  ]
})
export class ListClassModule { }
