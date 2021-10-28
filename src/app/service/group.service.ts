import { Injectable } from '@angular/core';

import { Group} from "../group/group";

import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private groupsUrl = 'http://localhost:8090/group';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  /** Log a GroupService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`GroupService: ${message}`);
  }

  /** GET groups from the server */
  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.groupsUrl)
      .pipe(
        tap(_ => this.log('fetched groups')),
        catchError(this.handleError<Group[]>('getGroups',[]))
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

  getGroup(id: number): Observable<Group> {
    const url = `${this.groupsUrl}/${id}`;
    return this.http.get<Group>(url).pipe(
      tap(_ => this.log(`fetched group id=${id}`)),
      catchError(this.handleError<Group>(`getGroup id=${id}`))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  updateGroup(group: Group): Observable<any> {
    return this.http.put(this.groupsUrl + `/${group.id}`, group, this.httpOptions).pipe(
      tap(_ => this.log(`updated group id=${group.id}`)),
      catchError(this.handleError<any>('updateGroup'))
    );
  }


  addGroup(group: Group): Observable<Group> {
    const url = `${this.groupsUrl}`;
    return this.http.post<Group>(url, group, this.httpOptions);
    }

  deleteGroup(id: number): Observable<Group> {
    const url = `${this.groupsUrl}/${id}`;
    return this.http.delete<Group>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted group id=${id}`)),
      catchError(this.handleError<Group>('delete Group'))
    );
  }


}
