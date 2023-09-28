import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {City, CityControllerService, CityDTO} from "../../swagger";
import Swal from "sweetalert2";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit{


  constructor(private cityControllerService : CityControllerService) {
  }
  inputs: { value: string }[] = [];
  name:any = '';

  addInput() {
    this.inputs.push({ value: '' });
  }

  removeInput(index: number) {
    this.inputs.splice(index, 1);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    // city =
    let data: Array<String> = [];
    for(let i = 0; i < this.inputs.length; i++){
      data.push(this.inputs[i].value);
    }
    const  city = new City(this.name, data);
    console.log(city);
    this.cityControllerService.create6(city).subscribe(resp =>  Swal.fire({ title:"success",
      icon: 'success'}));
  }
}
