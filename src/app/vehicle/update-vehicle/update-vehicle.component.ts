import { Component } from '@angular/core';
import { CURDService } from '../../Service/curd.service';
import { Vehicle } from '../../Models/Vehicle';

@Component({
  selector: 'app-update-vehicle',
  standalone: false,
  templateUrl: './update-vehicle.component.html',
  styleUrl: './update-vehicle.component.css'
})
export class UpdateVehicleComponent {

  constructor(private curdService: CURDService) { }

  vehicle: Vehicle = {
    service_center_id: 0,
    vin: '',
    model: '',
    status: '',
    date: new Date()
  };

  VIN!:string;

  GetCurrentVehicle(): void {
    var vehicle = this.curdService.GetVehicleByVin(this.VIN);
    if(vehicle) {
      this.vehicle = vehicle;
    }
    else {
      alert('Vehicle with VIN does not exist');
    }
  }

  updateVehicleDetails(): void{
    if(this.curdService.UpdateVehicle(this.vehicle.vin, this.vehicle)) {
      alert('Vehicle details updated successfully');
    }
    else {
      alert('Vehicle with VIN does not exist');
    }
  }

}
