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
  nextPage: string = '';

  constructor(private api: APIService, private userService: UserService, private router: Router) {}

  onSubmit() {
    console.log(this.username, this.password);

    // Call ValidateUser API
    this.api.ValidateUser(this.username, this.password).subscribe(
      (response: any) => { // The API now returns { status, token }
        if (response.status) {
          const token = response.token;
          
          // Store the token in localStorage
          localStorage.setItem('authToken', token);

          // Now get the user role
          this.api.GetUserRole(this.username, this.password).subscribe(
            (role: number) => {
              const userDetails = {
                username: this.username,
                password: this.password,
                role: role
              };

              // Save user details in UserService
              this.userService.setUser(userDetails);

              // Determine which page to navigate to based on the role
              this.nextPage = role === 3 ? '/admin' : '/dashboard';
              console.log('nextpage', this.nextPage, '<-start value');
              alert('User validated successfully');

              // Navigate to the appropriate page
              this.router.navigate([this.nextPage]);
            }
          );
        } else {
          // Handle invalid login
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
