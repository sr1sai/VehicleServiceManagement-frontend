import { Component } from '@angular/core';
import { CURDService } from '../../Service/curd.service';
import { ServiceCenter } from '../../Models/ServiceCenter';

@Component({
  selector: 'app-add-service-center',
  standalone: false,
  templateUrl: './add-service-center.component.html',
  styleUrl: './add-service-center.component.css'
})
export class AddServiceCenterComponent {

  constructor(private curdService: CURDService) { }

  serviceCenter: ServiceCenter = {
    id: 0,
    name: ''
  };

  AddServiceCenter():void {
    if(this.curdService.AddServiceCenter(this.serviceCenter)){
      alert("Service Center Added Successfully");
    }
    else{
      alert("Service Center Already Exists");
    }
  }
}
