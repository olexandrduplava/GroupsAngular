import { Component, OnInit} from '@angular/core';
import { Group} from "../group/group";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {GroupService} from "../service/group.service";
import {Student} from "../students/student";
import {StudentService} from "../service/student.service";

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

  group: Group | undefined;
  students: Student[] = [];
  student: Student | undefined;

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
      let idGroup = Number(this.route.snapshot.paramMap.get('id'));
      this.groupService.getGroup(idGroup)
        .subscribe((groupData) => {this.group = groupData;})
    }

    goBack(): void{
    this.location.back();
    }

    getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  delete(student: Student) {
    let student1:Student = {id:student.id,
      firstName: student.firstName,
      lastName: student.lastName,
      averageRank: student.averageRank,
      group: undefined}
    console.log("update1: student let");
    console.log(student);

    this.studentService.updateStudent(student1)
      .subscribe(() => this.goBack());
  }
}

