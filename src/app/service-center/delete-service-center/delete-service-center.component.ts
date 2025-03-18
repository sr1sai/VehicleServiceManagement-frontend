import { Component } from '@angular/core';
import { CURDService } from '../../Service/curd.service';
import { ServiceCenter } from '../../Models/ServiceCenter';
import { APIService } from '../../Service/api.service';
import { Router } from '@angular/router';
import { error } from 'jquery';

@Component({
  selector: 'app-delete-service-center',
  standalone: false,
  templateUrl: './delete-service-center.component.html',
  styleUrl: './delete-service-center.component.css'
})
export class DeleteServiceCenterComponent {
  constructor(private curdService: CURDService, private api:APIService, private router:Router){
    this.api.GetServiceCenters().subscribe((centers: ServiceCenter[]) => {
      this.serviceCenters = centers;
      // Map service center data to serviceCenterDict
      centers.forEach((center: ServiceCenter) => {
        this.serviceCenterDict[center.name] = center.id;
      });
    });
  }
  
  serviceCenter: ServiceCenter = {
    id:0,
    name:""
  };
  serviceCenters!: ServiceCenter[];
  serviceCenterDict: { [name: string]: number } = {};
  DeleteServiceCenter(): void {
    this.serviceCenter.id=this.serviceCenterDict[this.serviceCenter.name];
    this.api.DeleteServiceCenter(this.serviceCenter.id).subscribe(
      (response: string) => {
        alert("Service Center Deleted Successfully");
        console.log(response);
        this.router.navigate(['/get-service']);
      },
      (error)=>{
        alert("Service Center Not Found");
        console.log(error);
      }
    );
    this.api.DeleteVehicleByServiceCenterID(this.serviceCenter.id).subscribe(
      (response)=>{
        alert("Vehicles in Service Center Deleted Successfully");
        console.log(response);
        this.router.navigate(['/get-service']);
      },(error)=>{
        console.log(error);
        alert("Error Deleting Vehicles in Service Center");
      });
  }

}
