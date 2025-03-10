import { Component } from '@angular/core';
import { Vehicle } from '../../Models/Vehicle';
import { CURDService } from '../../Service/curd.service';

@Component({
  selector: 'app-get-vehicle',
  standalone: false,
  templateUrl: './get-vehicle.component.html',
  styleUrl: './get-vehicle.component.css'
})
export class GetVehicleComponent {
  vehicles!: Vehicle[];
  count=0;
  constructor(private curdService: CURDService) { }
  getAllVehicle(): void {
    this.vehicles = this.curdService.GetVehicles();
  }
}
