import { Component, OnInit } from '@angular/core';
import {Student} from "../students/student";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {StudentService} from "../service/student.service";
import {Group} from "../group/group";


import {GroupService} from "../service/group.service";


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: Student | undefined;


  groups: Group[] = [];


  getGroups(): void{
    this.groupService.getGroups()
      .subscribe(groups => this.groups = groups);
  }


//TODO make update work fine with groups and display correct which group is now


  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location,

    private groupService: GroupService
  ) {}

  ngOnInit(): void {
    this.getStudent();
    this.getGroups();
  }

  getStudent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.studentService.getStudent(id)
      .subscribe(student => this.student = student);
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    if(this.student){
      this.studentService.updateStudent(this.student)
        .subscribe(() => this.goBack());
    }
  }
}
