import { Component } from '@angular/core';
import { APIService } from '../Service/api.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private api:APIService) { }
  username: string ="";
  password: string="";
  onSubmit() {
    console.log(this.api.ValidateUser(this.username,this.password));
  }

}
