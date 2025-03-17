import { Component, model } from '@angular/core';
import { Vehicle } from '../../Models/Vehicle';
import { CURDService } from '../../Service/curd.service';
import { APIService } from '../../Service/api.service';
import { ServiceCenter } from '../../Models/ServiceCenter';

@Component({
  selector: 'app-get-vehicle',
  standalone: false,
  templateUrl: './get-vehicle.component.html',
  styleUrl: './get-vehicle.component.css'
})
export class GetVehicleComponent {
  vehicles!: Vehicle[];
  displayVehicles!: any[];
  serviceCenters!: ServiceCenter[];
  serviceCenterDict: { [id: number]: string } = {};
  count=0;
  constructor(private curdService: CURDService,private api:APIService) {}
  
   ngOnInit() {
    console.log(this.serviceCenterDict);
    this.api.GetVehicles().subscribe((data: Vehicle[]) => {
      this.api.GetServiceCenters().subscribe((centers: ServiceCenter[]) => {
        centers.forEach((center: ServiceCenter) => {
          this.serviceCenterDict[center.id] = center.name;
        });
      });

      this.vehicles=data;
    });
  }
}