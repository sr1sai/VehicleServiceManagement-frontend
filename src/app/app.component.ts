import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './Service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'VehicleServiceManagement';
  validUser: boolean = false;

  constructor(private router: Router, public userService: UserService) {
    this.userService.validUser.subscribe((status: boolean) => {
      this.validUser = status;
    });
  }

  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.validUser = true;
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/Login']);
    }
  }
}
