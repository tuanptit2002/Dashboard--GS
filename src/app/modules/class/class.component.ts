import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {
  CityControllerService,
  Class,
  ClassControllerService,
  SubjectControllerService,
  TechClassControllerService
} from "../../swagger";
import {DistrictControllerService} from "../../swagger/api/districtController.service";
import {LevelSchoolControllerService} from "../../swagger/api/levelSchoolController.service";
import Swal from "sweetalert2";


@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})


export class ClassComponent implements OnInit {
  formdata: FormGroup
  dropdownList: { item_id: number; item_text: string; }[] = [];
  selectedItems = [];
  dropdownSettings = {};
  data: { item_id?: number, item_text?: string } = {};

  dropdownOptions = [
    {value: 'option1', label: 'Option 1'},
    {value: 'option2', label: 'Option 2'},
    {value: 'option3', label: 'Option 3'}
  ];
  city: { name: string; id: number }[] = [];
  district: { id: number, name: string }[] = [];
  level: { id: number, name: string }[] = [];
  class: { item_id: number; item_text: string; }[] = [];

  constructor(private subjectControllerService: SubjectControllerService,
              private formBuilder: FormBuilder,
              private cityControllerService: CityControllerService,
              private districtControllerService: DistrictControllerService,
              private levelControllerService: LevelSchoolControllerService,
              private classControllerService: ClassControllerService,
              private teachClassControllerService: TechClassControllerService) {
    this.formdata = this.formBuilder.group({
      mutil: [''],
      districts: '',
      price: '',
      number_sessions: '',
      time_teach: '',
      information: '',
      request: '',
      describes: '',
      district: '',
      level: '',
      class: [''],
      city: ''
    });
  }

  ngOnInit() {
    this.subjectControllerService.findAll1().subscribe(resp => {
        if (resp.result) {
          resp.result?.map(x => {
            if (x.id !== undefined && x.subject !== undefined) {
              // this.dataSingle = [x.]
              const data = {item_id: x.id, item_text: x.subject};
              this.dropdownList = [data, ...this.dropdownList]
            }
          })
        }
      }
    );
    this.cityControllerService.findAll4().subscribe(resp => {
      if (resp.result) {
        resp.result.map(x => {
          if (x.id !== undefined && x.name !== undefined) {
            const data = {id: x.id, name: x.name};
            this.city = [data, ...this.city];
          }
        })
      }
    })
    // this.districtControllerService.findAll3().subscribe(resp => {
    //   if (resp.result) {
    //     resp.result.map(x => {
    //       if (x.id !== undefined && x.name !== undefined) {
    //         const data = {id: x.id, name: x.name};
    //         this.district = [data, ...this.district];
    //       }
    //     })
    //   }
    // });
    this.levelControllerService.findAll2().subscribe(resp => {
      if (resp.result) {
        resp.result.map(x => {
          if (x.id !== undefined && x.name !== undefined) {
            const data = {id: x.id, name: x.name};
            this.level = [data, ...this.level];
          }
        })
      }
    });

    this.teachClassControllerService.findAll().subscribe(resp => {
      if (resp.result) {
        resp.result.map(x => {
          if (x.id !== undefined && x.classroom !== undefined) {
            const data = {item_id: x.id, item_text: x.classroom};
            this.class = [data, ...this.class];
          }
        })
      }
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onClickSubmit(data: any) {
    console.log(data.value);
    const st: number[] = data.value.mutil.map((x: { item_id: number }) => x.item_id);
    const cl:number[] = data.value.class.map((x: { item_id: number }) => x.item_id);
  console.log("st ne", st)
    const dataReal = new Class(st,
      data.value.districts, data.value.price, data.value.number_sessions,
      data.value.time_teach, data.value.information, data.value.request, data.value.describes,
      data.value.district, data.value.level,cl, data.value.city)
    console.log(dataReal);
    this.classControllerService.create5(dataReal).subscribe(resp => Swal.fire({
      title: "success",
      icon: 'success'
    }))
  }

  submit(data:any){
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
}
