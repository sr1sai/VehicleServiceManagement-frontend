import { Component } from '@angular/core';
import { ServiceCenter } from '../../Models/ServiceCenter';
import { CURDService } from '../../Service/curd.service';
import { APIService } from '../../Service/api.service';

@Component({
  selector: 'app-get-service-center',
  standalone: false,
  templateUrl: './get-service-center.component.html',
  styleUrl: './get-service-center.component.css'
})
export class GetServiceCenterComponent {
  servicesCenters: ServiceCenter[] | null = [];

  constructor(private curdService: CURDService, private api: APIService) {}

  ngOnInit(): void {
    this.api.GetServiceCenters().subscribe(data => {
      data.sort((a, b) => a.id - b.id); // Sort by id
      this.servicesCenters = data;
    });
  }
  


}
