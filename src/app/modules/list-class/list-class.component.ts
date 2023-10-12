import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CityControllerService, ClassControllerService, FilterClass} from "../../swagger";
import { DistrictControllerService } from 'src/app/swagger/api/districtController.service';
import { LevelSchoolControllerService } from 'src/app/swagger/api/levelSchoolController.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent implements  OnInit{
  formdata: FormGroup
    dataClass:any;
    city: { name: string; id: number }[] = [];
    district: { id: number, name: string }[] = [];
    levelSchool: { id: number, name: string }[] = [];
      constructor(private classControllerService: ClassControllerService,
        private formBuilder: FormBuilder,
        private cityControllerService: CityControllerService,
        private districtControllerService: DistrictControllerService,
        private levelControllerService: LevelSchoolControllerService,
                  private ref: ChangeDetectorRef) {
          this.formdata = this.formBuilder.group({
            id:'',
            describes:'',
            city:'',
            district:'',
            request:'',
            sex:'',
            level:'',
            subject:'',
            class:''
          });


      }
      ngOnInit() {
        const data = new FilterClass(0,20);
        this.classControllerService.filter(data).subscribe(resp => {
          this.dataClass = resp.content;
          console.log(this.dataClass)
        });

        this.cityControllerService.findAll4().subscribe(resp => {
          if (resp.result) {
            resp.result.map(x => {
              if (x.id !== undefined && x.name !== undefined) {
                const data = {id: x.id, name: x.name};
                this.city = [data, ...this.city];
                // this.city.push(data);
              }
            })
          }
        })

        this.levelControllerService.findAll2().subscribe(resp => {
          if (resp.result) {
            resp.result.map(x => {
              if (x.id !== undefined && x.name !== undefined) {
                const data = {id: x.id, name: x.name};
                this.levelSchool = [data, ...this.levelSchool];
              }
            })
          }
        })
      }

  searchListClass(){

  }

  cityOnchange(data:any){
    console.log(data);
    this.district = [];
    this.districtControllerService.findDistrictToCity(data).subscribe(resp => {
      if (resp.result) {
        resp.result.map(x => {
          if (x.id !== undefined && x.name !== undefined) {
            const data = {id: x.id, name: x.name};
            this.district = [data, ...this.district];
          }
        })
      }
    });
  }
   submit(data:any){
        this.dataClass =[];
    console.log(data.value.request)
    let tmp = data.value

    const dataFilter = new FilterClass(0,20,tmp.id,
      tmp.describes,tmp.city,tmp.district,tmp.request,tmp.level,tmp.subject,tmp.class);
    console.log(dataFilter);
     this.classControllerService.filter(dataFilter).subscribe(resp => {
       this.dataClass = resp.content;
      Swal.fire({ title: "success",
        icon: 'success'})
      console.log(resp.content,"content ne")

        // this.ref.detach()
      console.log(this.dataClass)
    });
    // await new Promise(resolve => {
    //   this.classControllerService.filter(dataFilter).subscribe(resp => {
    //     Swal.fire({ title: "success",
    //       icon: 'success'})
    //     console.log(resp.content,"content ne")
    //     this.dataClass = [resp.content, ...this.dataClass];
    //     console.log(this.dataClass)
    //     resolve('');
    //   })
    // })
    console.log(this.dataClass);
  }
}
