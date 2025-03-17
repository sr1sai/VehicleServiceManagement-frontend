import { Injectable } from '@angular/core';
import { UserDetails } from '../Models/UserDetails';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.validUser.next(true);
    }
  }

  validUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  user: UserDetails = {
    username: '',
    password: '',
    role: 0
  };

  setUser(user: UserDetails): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
    this.validUser.next(true);
  }

  clearUser(): void {
    this.user = {
      username: '',
      password: '',
      role: 0
    };
    localStorage.removeItem('user');
    this.validUser.next(false);
  }
}