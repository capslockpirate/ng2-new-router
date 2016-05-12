import { Component, OnInit } from '@angular/core';

import { UsersService } from './users.service';

@Component({
  moduleId: module.id,
  selector: 'app-users',
  providers: [UsersService],
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];
  constructor(private _service: UsersService) {}

  ngOnInit() {
    this._service.getUsers()
      .subscribe(users => this.users = users);
    
  }

}
