import {NgModule} from '@angular/core';

import {ClassRoutingModule} from './class-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {CommonModule, NgFor} from "@angular/common";
import {ClassComponent} from "./class.component";
import {
  CityControllerService,
  ClassControllerService,
  SubjectControllerService,
  TechClassControllerService
} from "../../swagger";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DropdownModule} from "primeng/dropdown";
import {DistrictControllerService} from "../../swagger/api/districtController.service";
import {LevelSchoolControllerService} from "../../swagger/api/levelSchoolController.service";


@NgModule({
  declarations: [ClassComponent],
  imports: [
    CommonModule,
    ClassRoutingModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    FormsModule,

  ],
  providers: [
    SubjectControllerService,
    DistrictControllerService,
    CityControllerService,
    SubjectControllerService,
    LevelSchoolControllerService,
    ClassControllerService,
    TechClassControllerService
  ]
})
export class ClassModule {
}
