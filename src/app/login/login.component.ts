import { Component } from '@angular/core';
import { APIService } from '../Service/api.service';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private api: APIService, private userService: UserService, private router: Router) {}

  onSubmit() {
    console.log(this.username, this.password);
    this.api.ValidateUser(this.username, this.password).subscribe(
      (isValid: boolean) => {
        if (isValid) {
          this.api.GetUserRole(this.username, this.password).subscribe(
            (role: number) => {
              const userDetails = {
                username: this.username,
                password: this.password,
                role: role
              };
              this.userService.setUser(userDetails);
              this.router.navigate(['get-vehicle']);
            }
          );
        } else {
          this.userService.clearUser();
          alert('Invalid credentials');
        }
      },
      (error) => {
        console.error('Error validating user', error);
        alert('An error occurred while validating the user');
      }
    );
  }
}
