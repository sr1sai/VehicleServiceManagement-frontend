import { Component } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-un-authorized',
  standalone: false,
  templateUrl: './un-authorized.component.html',
  styleUrl: './un-authorized.component.css'
})
export class UnAuthorizedComponent {

  constructor(private userService:UserService) { }
  
  userRole:string="";
  ngOnInit(): void {
    if(this.userService.user.role == 1){
      this.userRole = "this.userService.user.role";
    } else if(this.userService.user.role == 2){
      this.userRole = "UnAuthorized User";
    } else {
      this.userRole = "Guest User";
    }
  }

}
