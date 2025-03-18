import { Component } from '@angular/core';
import { CURDService } from '../../Service/curd.service';
import { ServiceCenter } from '../../Models/ServiceCenter';
import { APIService } from '../../Service/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-service-center',
  standalone: false,
  templateUrl: './update-service-center.component.html',
  styleUrl: './update-service-center.component.css'
})
export class UpdateServiceCenterComponent {

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
  selectedServiceCenter: ServiceCenter={
    id:0,
    name:''
  };
  serviceCenters!: ServiceCenter[];
  serviceCenterDict: { [name: string]: number } = {};
  GetServiceCenterDetails():void{
    // Now that service centers are fetched, set the selected service center
    this.selectedServiceCenter = this.serviceCenters.find(center => center.name === this.serviceCenter.name) || { id: 0, name: '' };

    console.log("Service Centers: ", this.serviceCenters);
    console.log("Selected Service Center: ", this.selectedServiceCenter);
    
  }
  UpdateServiceCenter(){
    this.api.UpdateServiceCenter(this.selectedServiceCenter.id, this.selectedServiceCenter).subscribe(
      (response)=>{
        alert("Service Center Updated Successfully");
        console.log("Response: ", response);
        this.router.navigate(['/get-service']);
      },
      (error)=>{
        alert("Error while updating service center");
        console.log("Error: ", error);
      }
    );
  }

}
