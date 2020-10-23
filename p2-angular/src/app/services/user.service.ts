import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL: string = "https://p2schoolapi.azurewebsites.net/api/user/";

  constructor(private httpClient: HttpClient) { }

  // Methods

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.BASE_URL}GetAll`)
  }

  addUser(user: User): Observable<User>{
    return this.httpClient.post<User>(`${this.BASE_URL}add`, user);
  }

  login(user: User): Observable<User>{
    return this.httpClient.post<User>(`${this.BASE_URL}Login`, user);
  }

  
}
