import {Component, OnInit} from '@angular/core';
import {ClassControllerService, FilterClass} from "../../swagger";

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent implements  OnInit{

    data:any;
      constructor(private classControllerService: ClassControllerService) {
      }
      ngOnInit() {
        const data = new FilterClass(0,20);
        this.classControllerService.filter(data).subscribe(resp => {
          this.data = resp.content;
          console.log(this.data)
        });
      }

  searchListClass(){

  }
}
