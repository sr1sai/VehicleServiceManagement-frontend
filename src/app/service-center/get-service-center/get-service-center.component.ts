import { Component } from '@angular/core';
import { ServiceCenter } from '../../Models/ServiceCenter';
import { APIService } from '../../Service/api.service';

@Component({
  selector: 'app-get-service-center',
  standalone: false,
  templateUrl: './get-service-center.component.html',
  styleUrl: './get-service-center.component.css'
})
export class GetServiceCenterComponent {
  filterTemplate = { id: '', name: '' };
  serviceCenters: ServiceCenter[] = [];
  displayCenters: ServiceCenter[] = [];

  constructor(private api: APIService) {}

  ngOnInit(): void {
    this.api.GetServiceCenters().subscribe(data => {
      this.serviceCenters = data.sort((a, b) => a.id - b.id); // Sort by ID
      this.displayCenters = [...this.serviceCenters];
    });
  }

  filterCenters() {
    this.displayCenters = this.serviceCenters.filter(center =>
      (this.filterTemplate.id ? center.id.toString().includes(this.filterTemplate.id) : true) &&
      (this.filterTemplate.name ? center.name.toLowerCase().includes(this.filterTemplate.name.toLowerCase()) : true)
    );
  }
}
