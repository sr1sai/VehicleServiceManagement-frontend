import { Component } from '@angular/core';
import { CURDService } from '../../Service/curd.service';
import { Vehicle } from '../../Models/Vehicle';

@Component({
  selector: 'app-delete-vehicle',
  standalone: false,
  templateUrl: './delete-vehicle.component.html',
  styleUrl: './delete-vehicle.component.css'
})
export class DeleteVehicleComponent {

  constructor(private curdService: CURDService) { }

  VIN!:string;

  deleteVehicle(): void {
    if (this.curdService.DeleteVehicle(this.VIN)) {
      alert('Vehicle deleted successfully');
    } else {
      alert('Vehicle with VIN does not exist');
    }
  }

}
