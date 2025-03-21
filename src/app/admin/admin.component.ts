import { Component } from '@angular/core';
import { APIService } from '../Service/api.service';
import { Router } from '@angular/router';
import { UserDetails } from '../Models/UserDetails';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  standalone: false
})
export class AdminComponent {
  userAdmin = {
    username: '',
    password: '',
    role: 1
  };
  currentForm: string = 'add';

  constructor(private api: APIService, private router: Router) {}

  showForm(form: string) {
    this.currentForm = form;
  }

  AddUser() {
    this.api.AddUser(this.userAdmin).subscribe(
      (response) => {
        alert('User added successfully');
      },
      (error) => {
        alert('Error while adding user');
        console.log(error);
      }
    );
  }

  GetRole(){
    this.api.GetUserRole(this.userAdmin.username,this.userAdmin.password).subscribe(
      (role)=>{
        this.userAdmin.role=role;
        if(role==-1){
          alert("Credentials Do not match");
        }
      },
      (error)=>{
        alert("Credentials Do not match");
        console.log(error);
      }
    );
  }

  UpdateUser() {
    this.api.UpdateUser(this.userAdmin.username,this.userAdmin.password,this.userAdmin).subscribe(
      (response) => {
        alert('User updated successfully');
      },
      (error) => {
        alert('Error while updating user');
        console.log(error);
      }
    );
  }

  DeleteUser() {
    this.api.DeleteUser(this.userAdmin.username,this.userAdmin.password).subscribe(
      (response) => {
        alert('User deleted successfully');
      },
      (error) => {
        alert('Error while deleting user');
        console.log(error);
      }
    );
  }
}