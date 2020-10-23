import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((u) => {
      console.log(u)
      this.users = u 
      this.users = this.users.filter (u => {
        return u.role == 2;
      })
      console.log(this.users);
    });
    
   }

  ngOnInit(): void {
     
    
  }

}
