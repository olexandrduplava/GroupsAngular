import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {Student} from "../../students/student";
import {MessageService} from "../message-service/message.service";

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {AppSettings} from "../../constants/AppSettings";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentURL: string=`${AppSettings.Main_Url}/student`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  /** Log a StudentService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`StudentService: ${message}`);
  }

  /** GET students from the server */
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentURL)
      .pipe(
        tap(_ => this.log('fetched students')),
        catchError(this.handleError<Student[]>('getStudents',[]))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getStudent(id: number): Observable<Student>{
    const url = `${this.studentURL}/${id}`;
    return this.http.get<Student>(url).pipe(
      tap(_ => this.log(`fetched student id=${id}`)),
      catchError(this.handleError<Student>(`getStudent id=${id}`))
    );
  }

  updateStudent(student: Student): Observable<any> {
    return this.http.put(this.studentURL + `/${student.id}`, student, this.httpOptions).pipe(
      tap(_ => this.log(`updated student id=${student.id}`)),
      catchError(this.handleError<any>('updateStudent'))
    );
  }

  addStudent(student: Student): Observable<Student> {
    const url = `${this.studentURL}`;
    return this.http.post<Student>(url, student, this.httpOptions);
  }

  deleteStudent(id: number): Observable<Student> {
    const url = `${this.studentURL}/${id}`;
    return this.http.delete<Student>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted student id=${id}`)),
      catchError(this.handleError<Student>('delete Student'))
    );
  }
}
