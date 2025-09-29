import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser?: User;
  USER_KEY = 'user';

  constructor(public route: Router) {
    let userString = localStorage.getItem(this.USER_KEY);
    if (userString != null) this.currentUser = JSON.parse(userString);
  }

  connect(user: User) {
    this.currentUser = user;
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));

    this.route.navigate(['/home']);
  }

  disconnect() {
    this.currentUser = undefined;
    localStorage.removeItem(this.USER_KEY);

    this.route.navigate(['/login']);
  }
}
