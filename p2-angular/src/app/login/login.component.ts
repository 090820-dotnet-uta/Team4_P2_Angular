import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../student';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 student: Student;
 teacher: Teacher;
 userName: string;
 password: string;
 loginForm: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      password: new FormControl(""),
    })
    
  }

  onSubmit(): void {
    console.log(this.loginForm.value)
    console.log(this.loginForm.invalid)
  }
}
