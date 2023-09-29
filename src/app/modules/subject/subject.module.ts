import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import {SubjectControllerService} from "../../swagger";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ],
  providers:[SubjectControllerService]
})
export class SubjectModule { }
