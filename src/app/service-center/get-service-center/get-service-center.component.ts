import { Component } from '@angular/core';
import { ServiceCenter } from '../../Models/ServiceCenter';
import { CURDService } from '../../Service/curd.service';

@Component({
  selector: 'app-get-service-center',
  standalone: false,
  templateUrl: './get-service-center.component.html',
  styleUrl: './get-service-center.component.css'
})
export class GetServiceCenterComponent {
  constructor(private curdService: CURDService) {}

  servicesCenters: ServiceCenter[] | null = [];

  GetServiceCenters(): void{
    this.servicesCenters=this.curdService.GetServiceCenters();
  }


}
