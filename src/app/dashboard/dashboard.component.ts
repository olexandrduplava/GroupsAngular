import { Component, OnInit } from '@angular/core';
import {Group} from "../group/group";
import {GroupService} from "../service/group.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  groups: Group[] = [];

  constructor( private groupService: GroupService) { }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups():void{
    this.groupService.getGroups()
      .subscribe(groups=>this.groups =groups.slice(0,3));
  }

}
