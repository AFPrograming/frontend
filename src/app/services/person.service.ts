import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = '/api';
    this.myApiUrl = '/personas/'
  }

getListPersons(): Observable<Person[]> {
  return this.http.get<Person[]>(`${this.myAppUrl}${this.myApiUrl}`);
 }

 deletePerson(id: number): Observable<void> {
   return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
 }

 savePerson(person: Person): Observable<void> {
   return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`,person)
 }

 getPerson(id: number): Observable<Person> {
   return this.http.get<Person>(`${this.myAppUrl}${this.myApiUrl}${id}`)
 }

 updatePerson(id: number, person: Person): Observable<void> {
   return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, person);
 }

 
}
