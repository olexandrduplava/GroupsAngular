import { Injectable } from '@angular/core';

import { Group} from "../group/group";
import {GROUPS} from "../group/mock-groups";

import {Observable, of} from "rxjs";

import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private messageService: MessageService) { }

  getGroups(): Observable<Group[]> {
    const groups = of(GROUPS);
    this.messageService.add('GroupService: fetched groups')
    return groups;
  }

}
