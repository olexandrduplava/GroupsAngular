import { Injectable } from '@angular/core';

import { Group} from "../group/group";
import {GROUPS} from "../group/mock-groups";

import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  getGroups(): Observable<Group[]> {
    const groups = of(GROUPS);
    return groups;
  }

}
