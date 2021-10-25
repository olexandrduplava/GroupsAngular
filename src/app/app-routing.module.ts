import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {GroupComponent} from "./group/group.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {GroupDetailComponent} from "./group-detail/group-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: GroupDetailComponent},
  {path: 'groups', component: GroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
