import { Component, OnInit } from '@angular/core';
import { AuthenicationService } from '../services/authenication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;
  constructor(private authService: AuthenicationService) {}
  ngOnInit() {}

  login() {
    if (this.username === 'cameron' && this.password === '123') {
      this.authService.login();
    } else {
      console.log('Incorrect Username or password');
    }
  }
}
