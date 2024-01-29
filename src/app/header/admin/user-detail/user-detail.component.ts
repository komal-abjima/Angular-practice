import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../../Models/user';
import { UserService } from '../../../services/user.service';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  selectedUser: User;

  constructor(private userService: UserService){}

  ngOnInit(){
    this.userService.OnUserDetailsClicked.subscribe((data: User) => {
      this.selectedUser = data;
      console.log(this.selectedUser); 
    })
  }
}