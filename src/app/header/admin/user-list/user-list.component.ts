import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../Models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  constructor(private userService: UserService){}

  usersList = this.userService.GetAllUsers();

  showUserDetails(user: User){
    this.userService.OnShowUserDetails(user);

  }

}
