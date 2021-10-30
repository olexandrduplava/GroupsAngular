import { Component, OnInit } from '@angular/core';
import {Group} from "../group/group";
import {GroupService} from "../services/group-service/group.service";
import {Student} from "../students/student";
import {StudentService} from "../services/student-service/student.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  groups: Group[] = [];

  students: Student[] = [];

  constructor( private groupService: GroupService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.getGroups();
    this.getStudents();
  }

  getGroups():void{
    this.groupService.getGroups()
      .subscribe(groups=>this.groups =groups.slice(0,3));
  }

  getStudents():void{
    this.studentService.getStudents()
      .subscribe(students=>this.students =students.slice(0,3));
  }

}
