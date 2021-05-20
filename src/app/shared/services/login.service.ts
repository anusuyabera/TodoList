import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  checkUser(username: string, password: string) {
    if (username == 'admin' && password == 'hello')
      return true;
    else
      return false;
  }
}
