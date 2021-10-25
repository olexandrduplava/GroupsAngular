import { Component, OnInit } from '@angular/core';
import {Group} from "./group";
import {GROUPS} from "./mock-groups";

import {GroupService} from "../service/group.service";
import {MessageService} from "../service/message.service";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groups: Group[] = [];
  selectedGroup?: Group;

  constructor(private groupService: GroupService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getGroups()
  }

  onSelect(group: Group): void {
    this.selectedGroup = group;
    this.messageService.add(`GroupComponent: Selected group id=${group.id}`)
  }

  getGroups():void{
    this.groupService.getGroups()
      .subscribe(groups => this.groups = groups);
  }


}
