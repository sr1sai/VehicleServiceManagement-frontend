import { Component } from '@angular/core';
import { CURDService } from '../../Service/curd.service';
import { Vehicle } from '../../Models/Vehicle';
import { APIService } from '../../Service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-vehicle',
  standalone: false,
  templateUrl: './delete-vehicle.component.html',
  styleUrl: './delete-vehicle.component.css'
})
export class DeleteVehicleComponent {

  constructor(private curdService: CURDService, private api:APIService, private router:Router) { }

  VIN!:string;

  deleteVehicle(): void {
    this.api.DeleteVehicle(this.VIN).subscribe(
      (response)=>{
        alert('Vehicle deleted successfully');
        console.log(response);
        this.router.navigate(['/get-vehicle']);
      },
      (error) => {
        alert('Error while adding vehicle');
        console.log(error);
      }
    );
  }

}
