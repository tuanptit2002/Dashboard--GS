import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import {SubjectControllerService} from "../../swagger";
import {SubjectComponent} from "./subject.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [SubjectComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    FormsModule
  ],
  providers:[SubjectControllerService]
})
export class SubjectModule { }
