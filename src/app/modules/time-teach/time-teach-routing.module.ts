import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimeTeachComponent} from "./time-teach.component";

const routes: Routes = [
  {
    path:'',
    component:TimeTeachComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTeachRoutingModule { }
