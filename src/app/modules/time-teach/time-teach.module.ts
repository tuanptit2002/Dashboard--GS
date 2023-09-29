import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTeachRoutingModule } from './time-teach-routing.module';
import {TimeTeachControllerService} from "../../swagger";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TimeTeachRoutingModule
  ],
  providers:[TimeTeachControllerService]
})
export class TimeTeachModule { }
