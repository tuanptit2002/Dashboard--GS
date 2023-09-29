import { Component } from '@angular/core';
import {Subject, SubjectControllerService, TimeTeach, TimeTeachControllerService} from "../../swagger";
import Swal from "sweetalert2";

@Component({
  selector: 'app-time-teach',
  templateUrl: './time-teach.component.html',
  styleUrls: ['./time-teach.component.css']
})
export class TimeTeachComponent {
  name: any = '';

  constructor(private timeTeachControllerService : TimeTeachControllerService) {
  }
  onSubmit(){
    const timeTeach = new TimeTeach(this.name);
    this.timeTeachControllerService.create1(timeTeach).subscribe(resp =>  Swal.fire({ title:"success",
      icon: 'success'}))
  }
}
