import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './app-user-profile.component.html',
  styleUrls: ['./app-user-profile.component.css']
})
export class AppUserProfileComponent implements OnInit {
  id: number;
  userDetails: any = [];
  constructor(private router: Router, private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit() {
    if (this.userService.isvalidToken() === true) {
      this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.getUserInfo();
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  getUserInfo() {
    this.userService.getUserById(this.id).subscribe(
      (userData) => {
        const responseData: any = userData;
        this.userDetails = responseData.data;
      }
    );
  }
  onSubmit(formValue: any) {
    console.log('Form Value =', formValue);
  }
}
