import { Component, OnInit } from '@angular/core';
import {Student} from "../students/student";
import {Group} from "../group/group";
import {StudentService} from "../service/student.service";
import {GroupService} from "../service/group.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  groups: Group[] = [];

  students: Student[] = [];

  constructor(private studentService: StudentService,
              private groupService: GroupService,
              private location: Location) { }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(): void{
    this.groupService.getGroups()
      .subscribe(groups => this.groups = groups);
  }

  add(firstName: string, lastName: string, groupId: number): void {
    firstName = firstName.trim();
    lastName = lastName.trim();
    if(!firstName && !lastName) {return;}

    let student:Student = { firstName:firstName, lastName:lastName, group:this.groups.find(h=> h.id === groupId) as Group}
    console.log(student,groupId)

    this.studentService.addStudent(student)
      // this.studentService.addStudent({ firstName, lastName, this.groups[0] } as Student)
      .subscribe(group => {
        this.students.push(group);
      });
  }

  goBack() {
    this.location.back();
  }
}
