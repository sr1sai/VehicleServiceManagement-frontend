import { Component } from '@angular/core';
import { CURDService } from '../../Service/curd.service';
import { ServiceCenter } from '../../Models/ServiceCenter';
@Component({
  selector: 'app-update-service-center',
  standalone: false,
  templateUrl: './update-service-center.component.html',
  styleUrl: './update-service-center.component.css'
})
export class UpdateServiceCenterComponent {

  constructor(private curdService: CURDService){}

  serviceCenter: ServiceCenter = {
    id:0,
    name:""
  };
  GetServiceCenterDetails():void{
    var serviceCenter=this.curdService.GetServiceCenterByID(this.serviceCenter.id);
    if(serviceCenter){
      this.serviceCenter.name=serviceCenter.name;
    }
    else{
      alert("Service Center not found");
    }
  }
  UpdateServiceCenter(){
    if(this.curdService.UpdateServiceCenter(this.serviceCenter.id,this.serviceCenter)){
      alert("Service Center updated successfully");
    }
    else{
      alert("Service Center not found");
    }
  }

}
