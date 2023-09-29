import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TechClassComponent} from "./tech-class.component";

const routes: Routes = [
  {
    path:'',
    component:TechClassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechClassRoutingModule { }
