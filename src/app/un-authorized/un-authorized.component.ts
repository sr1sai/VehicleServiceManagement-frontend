import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { UserDetails } from '../Models/UserDetails';

@Component({
  selector: 'app-un-authorized',
  templateUrl: './un-authorized.component.html',
  styleUrls: ['./un-authorized.component.css'],
  standalone: false
})
export class UnAuthorizedComponent {
  userRole: string = ''; // Example role, replace with actual role logic

  constructor(private location: Location) {}

  ngOnInit() {
    let user: UserDetails | null = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;
    if (user) {
      if (user.role === 1) {
        this.userRole = 'Employee';
      } else if (user.role === 2) {
        this.userRole = 'Manager';
      } else if (user.role === 3) {
        this.userRole = 'Admin';
      }
    }
  }

  goBack() {
    this.location.back();
  }
}
