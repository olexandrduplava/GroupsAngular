import { Component, OnInit} from '@angular/core';
import { Group} from "../group/group";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {GroupService} from "../service/group.service";
import {Student} from "../students/student";
import {StudentService} from "../service/student.service";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

  group: Group | undefined;
  students: Student[] = [];

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private location: Location,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.getGroup();
    this.getStudents();

  }

    getGroup(): void{
      // const id = Number(this.route.snapshot.paramMap.get('id'));

      var idGroup = Number(this.route.snapshot.paramMap.get('id'));

      this.groupService.getGroup(idGroup!)
        .subscribe((groupData) => {this.group = groupData;})


      // this.groupService.getGroup(id)
      //   .subscribe(group=>this.group=group);
    }

    goBack(): void{
    this.location.back();
    }

    getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

}

