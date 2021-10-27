import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {GroupComponent} from "./group/group.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {GroupDetailComponent} from "./group-detail/group-detail.component";

import {StudentsComponent} from "./students/students.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'groups/:id', component: GroupDetailComponent},
  {path: 'groups', component: GroupComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'students/:id', component: StudentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
