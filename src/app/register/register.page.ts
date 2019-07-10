import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: string;
  password: string;
  passwordCheck: string;
  notes: string;
  budgetAmount: number;
  constructor() { }

  ngOnInit() {
  }
  register() {
    if (this.password === this.passwordCheck) {
      console.log('Yay, registered!');
    }
  }
}
