import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../Models/Vehicle';
import { CURDService } from '../../Service/curd.service';
import { UppercasePipe } from '../../Pipe/uppercase.pipe';
import { APIService } from '../../Service/api.service';
import { Router } from '@angular/router';
import { ServiceCenter } from '../../Models/ServiceCenter';

@Component({
  selector: 'app-add-vehicle',
  standalone: false,
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.css'
})
export class AddVehicleComponent implements OnInit {
  vehicle: Vehicle = {
    service_center_id: 0,
    vin: '',
    model: '',
    status: '',
    date: new Date()
  };
  serviceCenters: ServiceCenter[] = [];
  selectedServiceCenter: ServiceCenter={
    id:0,
    name:''
  };


  constructor(private curdService: CURDService, private uppercase: UppercasePipe, private api: APIService, private router: Router) {}

  ngOnInit() {
    this.api.GetServiceCentersForVehicle().subscribe((data: ServiceCenter[]) => {
      this.serviceCenters = data;
    });
  }

  addVehicle() {
    this.selectedServiceCenter  = this.serviceCenters.find(center => center.name === this.selectedServiceCenter.name) || { id: 0, name: '' };
    if (this.selectedServiceCenter) {
      this.vehicle.service_center_id = this.selectedServiceCenter.id;
    }
    console.log(this.vehicle);
    this.api.AddVehicle(this.vehicle).subscribe(
      (response) => {
        alert('Vehicle added successfully');
        this.router.navigate(['/get-vehicle']);
        console.log(response);
      },
      (error) => {
        alert('Error while adding vehicle');
        console.log(error);
      }
    );
  }
}
