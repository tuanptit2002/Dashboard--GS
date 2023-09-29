import { Component } from '@angular/core';
import {Subject, SubjectControllerService, TeachClass, TechClassControllerService} from "../../swagger";
import Swal from "sweetalert2";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  name: any = '';

  constructor(private subjectService : SubjectControllerService) {
  }
  onSubmit(){
    const tech = new Subject(this.name);
    this.subjectService.create3(tech).subscribe(resp =>  Swal.fire({ title:"success",
      icon: 'success'}))
  }
}
