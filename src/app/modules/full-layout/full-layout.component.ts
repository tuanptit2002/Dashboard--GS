import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent {
  title = 'angular16';
  //Sidebar toggle show hide function
  status = false;
  addToggle()
  {
    this.status = !this.status;
  }
  data:any;
  constructor(private http: HttpClient,private route: Router){
    //get request from web api
    // this.http.get('https://therichpost.com/testjsonapi/users/').subscribe(data => {
    //   this.data = data;
    //
    // }, error => console.error(error));
  }



  goto(s: string) {
    this.route.navigateByUrl(s);
  }
}
