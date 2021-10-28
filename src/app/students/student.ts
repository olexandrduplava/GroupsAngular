import {Group} from "../group/group";

export interface Student {
  id?: number;
  firstName: string;
  lastName: string;
  averageRank?: number;
  group?: Group;
}
