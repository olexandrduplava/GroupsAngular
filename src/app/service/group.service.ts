import { Injectable } from '@angular/core';

import { Group} from "../group/group";
import {GROUPS} from "../group/mock-groups";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  getGroups(): Group[] {
    return GROUPS;
  }

}
