import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FullLayoutComponent} from "./full-layout.component";
import {CityComponent} from "../city/city.component";


const routes: Routes = [{
  // path: 'full',
  // component: FullLayoutComponent,
  path: '',
  component: FullLayoutComponent,
  children: [
    {
      path: 'city',
      loadChildren: () => import('../city/city.module').then(m => m.CityModule)
    }
  ]
}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullLayoutRoutingModule {}
