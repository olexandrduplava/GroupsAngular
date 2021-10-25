import { Component, OnInit } from '@angular/core';
import {Group} from "./group";
import {GROUPS} from "./mock-groups";

import {GroupService} from "../service/group.service";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groups: Group[] = [];
  selectedGroup?: Group;

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.getGroups()
  }

  onSelect(group: Group): void {
    this.selectedGroup = group;
  }

  getGroups():void{
    this.groupService.getGroups()
      .subscribe(groups => this.groups = groups);
  }


}
