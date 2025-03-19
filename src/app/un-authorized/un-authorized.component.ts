import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-un-authorized',
  templateUrl: './un-authorized.component.html',
  styleUrls: ['./un-authorized.component.css'],
  standalone: false
})
export class UnAuthorizedComponent {
  userRole: string = 'guest'; // Example role, replace with actual role logic

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
