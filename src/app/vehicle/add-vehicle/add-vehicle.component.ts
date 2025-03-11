import { Component } from '@angular/core';
import { Vehicle } from '../../Models/Vehicle';
import { CURDService } from '../../Service/curd.service';
import { UppercasePipe } from '../../Pipe/uppercase.pipe';

@Component({
  selector: 'app-add-vehicle',
  standalone: false,
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.css'
})


export class AddVehicleComponent {
  
  vehicle: Vehicle = {
    serviceCenterId: 0,
    VIN: '',
    model: '',
    status: '',
    lastActionDate: new Date()
  };

  constructor(private curdService: CURDService, private uppercase: UppercasePipe) {}

  addVehicle(): void {
    if(this.vehicle){
      this.vehicle.VIN = String(this.uppercase.transform(this.vehicle.VIN));
    }
    if (this.curdService.AddVehicle(this.vehicle)) {
      alert('Vehicle added successfully');
    } else {
      alert('Vehicle with VIN already exists');
    }
  }
}
