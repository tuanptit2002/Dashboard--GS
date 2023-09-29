import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechClassRoutingModule } from './tech-class-routing.module';
import {TechClassComponent} from "./tech-class.component";
import {FormsModule} from "@angular/forms";
import {TechClassControllerService} from "../../swagger";


@NgModule({
  declarations: [TechClassComponent],
  imports: [
    CommonModule,
    TechClassRoutingModule,
    FormsModule
  ],
  providers:[TechClassControllerService]
})
export class TechClassModule { }
