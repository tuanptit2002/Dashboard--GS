import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListClassComponent} from "./list-class.component";

const routes: Routes = [
  {
    path:'',
    component:ListClassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListClassRoutingModule { }
