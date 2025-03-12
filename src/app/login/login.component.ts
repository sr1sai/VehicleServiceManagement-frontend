import { Component } from '@angular/core';
import { APIService } from '../Service/api.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private api:APIService){}
  username: any;
  password: any;
  onSubmit() {
    console.log(this.username,this.password);
    console.log(this.api.ValidateUser(this.username,this.password));
    this.api.ValidateUser(this.username, this.password).subscribe(
      (isValid: boolean) => {
        if (isValid) {
          alert('Invalid');
        } else {
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
