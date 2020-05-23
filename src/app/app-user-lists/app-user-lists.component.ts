import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-lists',
  templateUrl: './app-user-lists.component.html',
  styleUrls: ['./app-user-lists.component.css']
})
export class AppUserListsComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }
    usersArray: any;
  ngOnInit() {
    if (this.userService.isvalidToken() === true) {
      this.userService.getAllUsers().subscribe( (data) => {
        const responseData: any = data;
        if (responseData.hasOwnProperty('data')) {
          this.usersArray = responseData.data;
        }
      }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  goToUserProfile(userId: number) {
    this.router.navigate(['userprofile/' + userId]);
  }

}
