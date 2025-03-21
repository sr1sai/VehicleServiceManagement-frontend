import { Component } from '@angular/core';
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
  filterTemplate = { vin: '', serviceCenterName: '', model: '', status: '' };
  filterDate: string = '';
  vehicles!: Vehicle[];
  displayVehicles!: Vehicle[];
  serviceCenters!: ServiceCenter[];
  serviceCenterDict: { [id: number]: string } = {};

  constructor(private api: APIService) {}

  ngOnInit() {
    this.api.GetVehicles().subscribe((data: Vehicle[]) => {
      this.api.GetServiceCentersForVehicle().subscribe((centers: ServiceCenter[]) => {
        centers.forEach((center) => {
          this.serviceCenterDict[center.id] = center.name;
        });
        this.serviceCenters = centers;
      });

      this.vehicles = data;
      this.displayVehicles = [...data];
    });
  }

  filterVehicles() {
    this.displayVehicles = this.vehicles.filter(vehicle => 
      (this.filterTemplate.vin ? vehicle.vin.includes(this.filterTemplate.vin.toUpperCase()) : true) &&
      (this.filterTemplate.model ? vehicle.model.toLowerCase().includes(this.filterTemplate.model.toLowerCase()) : true) &&
      (this.filterTemplate.status ? vehicle.status.toLowerCase().includes(this.filterTemplate.status.toLowerCase()) : true) &&
      (this.filterTemplate.serviceCenterName ? vehicle.service_center_id.toString() === this.filterTemplate.serviceCenterName : true) &&
      (this.filterDate ? new Date(vehicle.date).toISOString().split('T')[0] === this.filterDate : true)
    );
  }
}
