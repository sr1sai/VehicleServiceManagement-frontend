import { Component } from '@angular/core';
import { CURDService } from '../../Service/curd.service';
import { ServiceCenter } from '../../Models/ServiceCenter';
import { APIService } from '../../Service/api.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-add-service-center',
  standalone: false,
  templateUrl: './add-service-center.component.html',
  styleUrl: './add-service-center.component.css'
})
export class AddServiceCenterComponent {

  constructor(private curdService: CURDService, private api:APIService, private router:Router) { }

  serviceCenter: ServiceCenter = {
    id: -1,
    name: ''
  };

  async AddServiceCenter() {
    try {
      const data = await firstValueFrom(this.api.GetServiceCenters());
      this.serviceCenter.id = data.length + 1;
      console.log(this.serviceCenter);

      const response = await firstValueFrom(this.api.AddServcieCenter(this.serviceCenter));
      alert("Service Center Added Successfully");
      console.log(response);
      this.router.navigate(['/get-service']);
    } catch (error) {
      alert("Error Adding Service Center");
      console.log(error);
    }
  }
}
