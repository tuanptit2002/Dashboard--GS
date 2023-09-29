import { Component } from '@angular/core';
import {Major, MajoredControllerService} from "../../swagger";
import {FormBuilder, FormGroup} from "@angular/forms";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.css']
})
export class MajorComponent {
  formdata : FormGroup;
  constructor( private formBuilder : FormBuilder,private majorControllerService : MajoredControllerService) {

    this.formdata = this.formBuilder.group({
      name: [''] // Define your form control(s) here
    });
  }
  onClickSubmit(data: any){
    // console.log(da)
   const dataReal : string = data.value.name;
   console.log(dataReal)
    const major = new Major(dataReal);
    console.log(major)
    this.majorControllerService.create4(major).subscribe(resp =>  Swal.fire({ title:"success",
      icon: 'success'}))
  }
}
