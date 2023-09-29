import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { TechClassComponent } from './modules/tech-class/tech-class.component';
import { SubjectComponent } from './modules/subject/subject.component';
import { TimeTeachComponent } from './modules/time-teach/time-teach.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    TimeTeachComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
