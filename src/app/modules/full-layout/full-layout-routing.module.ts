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
    },
    {
      path: 'major',
      loadChildren: () => import('../major/major.module').then(m => m.MajorModule)
    },
    {
      path:'techClass',
      loadChildren: () => import('../tech-class/tech-class.module').then(m => m.TechClassModule)
    },
    {
      path:'subject',
      loadChildren: () => import('../subject/subject.module').then(m => m.SubjectModule)
    },
    {
      path:'timeTeach',
      loadChildren: () => import('../time-teach/time-teach.module').then(m => m.TimeTeachModule)
    },
    {
      path:'class',
      loadChildren: () => import('../class/class.module').then(m => m.ClassModule)
    },
    {
      path:'list-class',
      loadChildren: () =>import('../list-class/list-class.module').then(m => m.ListClassModule)
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
