import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListClassRoutingModule } from './list-class-routing.module';
import {ListClassComponent} from "./list-class.component";
import {ClassControllerService} from "../../swagger";


@NgModule({
  declarations: [ListClassComponent],
  imports: [
    CommonModule,
    ListClassRoutingModule
  ],
  providers:[
    ClassControllerService
  ]
})
export class ListClassModule { }
