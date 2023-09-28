import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MajorRoutingModule } from './major-routing.module';
import {MajorComponent} from "./major.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MajoredControllerService} from "../../swagger";


@NgModule({
  declarations: [MajorComponent],
  imports: [
    CommonModule,
    MajorRoutingModule,
    ReactiveFormsModule
  ],
  providers:[MajoredControllerService]
})
export class MajorModule { }
