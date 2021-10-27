import { Component, OnInit} from '@angular/core';
import { Group} from "../group/group";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {GroupService} from "../service/group.service";

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

  group: Group | undefined;

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private location: Location
  ) { }

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

