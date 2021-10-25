import { Component, OnInit } from '@angular/core';
import {Group} from "./group";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  group: Group={
    id:1,
    title: 'Group 1',
    createDate: "NOW"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
