import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {


  userName: string = "";
  password: string = "";
  isUserLoggedIn = true;

  constructor(public router: Router) {

  }
  ngOnInit() {

  }

  ngUserLogin() {

    if (this.userName && this.password) {
      localStorage.setItem('isAuthenticated', 'true');
      
      console.log(this.isUserLoggedIn);
      //this.router.navigateByUrl("home/user-home");
      this.router.navigate(['home/user-home']);
    } else {
      console.log(this.userName);
      console.log(this.password);
    }
  }

}
