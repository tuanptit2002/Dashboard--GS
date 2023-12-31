import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FullLayoutComponent} from "./modules/full-layout/full-layout.component";

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./modules/full-layout/full-layout.module').then(m => m.FullLayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
