import { Component, OnInit } from '@angular/core';
import {Group} from "../group";
import {GroupService} from "../../services/group-service/group.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.css']
})
export class GroupAddComponent implements OnInit {

  groups: Group[] = [];

  constructor(
    private groupService: GroupService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getGroups()
  }

  getGroups(): void{
    this.groupService.getGroups()
      .subscribe(groups => this.groups = groups);
  }

  add(title: string): void {
    title = title.trim();
    if(!title) {return;}
    this.groupService.addGroup({ title } as Group)
      .subscribe(group => {
        this.groups.push(group);
      });
  }

  goBack() {
    this.location.back();
  }
}
