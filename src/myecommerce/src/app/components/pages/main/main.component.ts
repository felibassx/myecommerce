import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../interfaces/iuser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  users: any;

  constructor(
    private readonly _userService: UserService
  ) { 
    this._userService.getUsersInfo()
    .subscribe((users_res: any) => {
      this.users = users_res;
      console.log(users_res);
    });
  }

  ngOnInit() {

    
    
  }

}
