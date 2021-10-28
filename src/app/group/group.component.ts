import { Component, OnInit } from '@angular/core';
import {Group} from "./group";
import {GroupService} from "../service/group.service";
import {StudentService} from "../service/student.service";
import {Student} from "../students/student";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groups: Group[] = [];
  students: Student[] = [];

  constructor(
    private groupService: GroupService,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.getGroups()
    this.getStudents()
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  getGroups(): void{
    this.groupService.getGroups()
      .subscribe(groups => this.groups = groups);
  }

  add(title: string): void {
      title = title.trim();
      if(!title) {return;}
      this.groupService.addGroup({ title } as Group)
        .subscribe(group => {
          this.groups.push(group);
        });
  }

  delete(group: Group): void {
    this.groups = this.groups.filter(h=> h!== group);
    this.groupService.deleteGroup(group.id).subscribe();
  }
}
