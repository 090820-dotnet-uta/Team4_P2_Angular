import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((u) => {
      console.log(u)
      this.users = u 
      this.users = this.users.filter(u => {
        return u.role == 1;
      })
      console.log(this.users);
    });
  }

  ngOnInit(): void {
  }

}
