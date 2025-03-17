import { Component } from '@angular/core';
import { CURDService } from '../../Service/curd.service';
import { Vehicle } from '../../Models/Vehicle';
import { APIService } from '../../Service/api.service';
import { ServiceCenter } from '../../Models/ServiceCenter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-vehicle',
  standalone: false,
  templateUrl: './update-vehicle.component.html',
  styleUrl: './update-vehicle.component.css'
})
export class UpdateVehicleComponent {

  constructor(private curdService: CURDService, private api:APIService, private router:Router) { }

  vehicle: Vehicle = {
    service_center_id: 0,
    vin: '',
    model: '',
    status: '',
    date: new Date()
  };
  serviceCenters!: ServiceCenter[];
  serviceCenterDict: { [id: number]: string } = {};
  selectedServiceCenter: ServiceCenter={
    id:0,
    name:''
  };
  VIN!:string;

  GetCurrentVehicle(): void {
    this.api.GetVehicleByVIN(this.VIN).subscribe(
      (data: Vehicle) => {
        this.vehicle = data;
        console.log("Vehicle Data: ", this.vehicle);
  
        // Fetch service centers
        this.api.GetServiceCenters().subscribe((centers: ServiceCenter[]) => {
          this.serviceCenters = centers;
  
          // Map service center data to serviceCenterDict
          centers.forEach((center: ServiceCenter) => {
            this.serviceCenterDict[center.id] = center.name;
          });
  
          // Now that service centers are fetched, set the selected service center
          this.selectedServiceCenter = this.serviceCenters.find(center => center.id === this.vehicle.service_center_id) || { id: 0, name: '' };
  
          console.log("Service Centers: ", this.serviceCenters);
          console.log("Selected Service Center: ", this.selectedServiceCenter);
        });
      }
    );
  }
  

  updateVehicleDetails(): void{
    this.serviceCenters.find(center => center.name === this.selectedServiceCenter.name) || { id: 0, name: '' };
    if (this.selectedServiceCenter) {
      this.vehicle.service_center_id = this.selectedServiceCenter.id;
    }
    console.log(this.vehicle);
    console.log(this.selectedServiceCenter);
    this.api.UpdateVehicle(this.vehicle).subscribe(
      (response)=>{
        alert("Vehicle Updated Successfully");
        this.router.navigate(["/get-vehicle"]);
        console.log(response);
      },
      (error) => {
        alert('Error while adding vehicle');
        console.log(error);
      }
    );
  }

}
