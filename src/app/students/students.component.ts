import { Component, OnInit } from '@angular/core';
import {Student} from "./student";
import {StudentService} from "../service/student.service";
import {Group} from "../group/group";
import {GroupService} from "../service/group.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];

  groups: Group[] = [];



  constructor(private studentService: StudentService,
              private groupService: GroupService) { }

  ngOnInit(): void {
    this.getStudents();
    this.getGroups();
  }

  getGroups(): void{
    this.groupService.getGroups()
      .subscribe(groups => this.groups = groups);
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
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

  delete(student: Student): void {
    this.students = this.students.filter(h=> h!== student);
    this.studentService.deleteStudent(student.id!).subscribe();
  }
}
