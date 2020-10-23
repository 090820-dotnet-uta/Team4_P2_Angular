import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import { Teacher } from '../teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private BASE_URL: string = "https://p2schoolapi.azurewebsites.net/api/teacher/";
  
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Array<Teacher>> {
    return this.httpClient.get<Array<Teacher>>(`${this.BASE_URL}GetAll`);
  }
}
