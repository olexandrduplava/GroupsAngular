import {Student} from "../students/student";

export interface Group{
  id: number;
  title: string;
  students?:Student[];
}
