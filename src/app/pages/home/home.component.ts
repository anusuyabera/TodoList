import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string = ''
  password: string = ''
  isValidUser: boolean = false

  constructor(
    private login: LoginService
  ) { }

  ngOnInit(): void {
  }

  reset() {
    this.username = ''
    this.password = ''
    this.isValidUser = false
  }

  submit() {
    this.isValidUser = this.login.checkUser(this.username, this.password)
  }

}