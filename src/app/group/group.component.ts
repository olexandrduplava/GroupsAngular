import { Component, OnInit } from '@angular/core';
import {Group} from "./group";
import {GROUPS} from "./mock-groups";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groups = GROUPS;
  selectedGroup?: Group;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(group: Group): void {
    this.selectedGroup = group;
  }



}
