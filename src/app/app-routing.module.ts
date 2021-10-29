import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {GroupComponent} from "./group/group.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {GroupDetailComponent} from "./group-detail/group-detail.component";

import {StudentsComponent} from "./students/students.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";
import {GroupAddComponent} from "./group-add/group-add.component";
import {StudentAddComponent} from "./student-add/student-add.component";
import {GroupEditComponent} from "./group-edit/group-edit.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: DashboardComponent},
  {path: 'groups/:id', component: GroupDetailComponent},
  {path: 'groups-edit/:id', component: GroupEditComponent},
  {path: 'groups', component: GroupComponent},
  {path: 'groups-add', component: GroupAddComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'students-add', component: StudentAddComponent},
  {path: 'students/:id', component: StudentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
