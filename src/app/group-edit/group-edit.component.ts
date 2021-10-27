import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GroupService} from "../service/group.service";
import {Location} from "@angular/common";
import {Group} from "../group/group";

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {

  group: Group | undefined;

  constructor(private route: ActivatedRoute,
              private groupService: GroupService,
              private location: Location) { }

  ngOnInit(): void {
    this.getGroup();
  }

  getGroup(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.groupService.getGroup(id)
      .subscribe(group=>this.group=group);
  }

  goBack(): void{
    this.location.back();
  }

  update(): void {
    if(this.group){
      this.groupService.updateGroup(this.group)
        .subscribe(() => this.goBack());
    }
  }
}
