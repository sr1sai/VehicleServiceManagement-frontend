import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  serviceArrow:string = 'fa fa-angle-down';
  vehicleArrow:string = 'fa fa-angle-down';
  displayService:boolean = false;
  displayVehicle:boolean = false;

  ToggleService() {
    this.displayService = !this.displayService;
    this.serviceArrow = this.displayService ? 'fa fa-angle-up' : 'fa fa-angle-down';
  }
  ToggleVehicle() {
    this.displayVehicle = !this.displayVehicle;
    this.vehicleArrow = this.displayVehicle ? 'fa fa-angle-up' : 'fa fa-angle-down';
  }
}
