import { Component, OnInit } from '@angular/core';
import {Student} from "./student";
import {StudentService} from "../service/student.service";
import {Group} from "../group/group";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  add(firstName: string, lastName: string): void {
    firstName = firstName.trim();
    lastName = lastName.trim()
    if(!firstName && !lastName) {return;}
    this.studentService.addStudent({ firstName, lastName } as Student)
      .subscribe(group => {
        this.students.push(group);
      });
  }

  delete(student: Student): void {
    this.students = this.students.filter(h=> h!== student);
    this.studentService.deleteStudent(student.id).subscribe();
  }
}
