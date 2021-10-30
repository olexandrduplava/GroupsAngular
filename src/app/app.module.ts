import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

import { GroupComponent } from './group/group.component';
import { GroupDetailComponent } from './group/group-detail/group-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './home/dashboard.component';

import {HttpClientModule} from "@angular/common/http";
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { GroupAddComponent } from './group/group-add/group-add.component';
import { StudentAddComponent } from './students/student-add/student-add.component';
import { GroupEditComponent } from './group/group-edit/group-edit.component';

import {PageNotFound} from "./page-notFound";

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    GroupDetailComponent,
    MessagesComponent,
    DashboardComponent,
    StudentsComponent,
    StudentDetailComponent,
    GroupAddComponent,
    StudentAddComponent,
    GroupEditComponent,
    PageNotFound
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
