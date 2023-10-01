import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTeachRoutingModule } from './time-teach-routing.module';
import {TimeTeachControllerService} from "../../swagger";
import {TimeTeachComponent} from "./time-teach.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [TimeTeachComponent],
  imports: [
    CommonModule,
    TimeTeachRoutingModule,
    FormsModule
  ],
  providers:[TimeTeachControllerService]
})
export class TimeTeachModule { }
