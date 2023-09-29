import { Component } from '@angular/core';
import {TeachClass, TechClassControllerService} from "../../swagger";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tech-class',
  templateUrl: './tech-class.component.html',
  styleUrls: ['./tech-class.component.css']
})
export class TechClassComponent {
  name: any = '';

  constructor(private teachClassService : TechClassControllerService) {
  }
  onSubmit(){
    const tech = new TeachClass(this.name);
    this.teachClassService.create2(tech).subscribe(resp =>  Swal.fire({ title:"success",
      icon: 'success'}))
  }
}
