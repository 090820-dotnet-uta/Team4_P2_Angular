import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Role } from '../role';
import { UserService } from '../services/user.service';
import { Student } from '../student';
import { Teacher } from '../teacher';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  student: Student;
  teacher: Teacher;
  userName: string;
  password: string;
  signUpForm: FormGroup;
  roleType: Role = new Role();
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      password: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(25)]),
      role: new FormControl("", [Validators.required])
    })
  }

  onSubmit(): void {
    console.log(this.signUpForm.value)
    console.log(this.signUpForm.invalid)
    console.log(this.roleType[this.signUpForm.get("role").value])
    
    let user = new User();
    user.userName = this.signUpForm.get("userName").value;
    user.password = this.signUpForm.get("password").value;
    user.role = this.signUpForm.get("role").value;
    console.log(user);

    this.userService.addUser(user).subscribe((u) => {
      console.log(u);
    });

  }
}
