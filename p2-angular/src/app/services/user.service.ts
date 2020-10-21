import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL: string = "https://localhost:5001/api/user/";

  constructor(private httpClient: HttpClient) { }

  // Methods
  addUser(user: User): Observable<User>{
    return this.httpClient.post<User>(`${this.BASE_URL}add`, user);
  }
}
