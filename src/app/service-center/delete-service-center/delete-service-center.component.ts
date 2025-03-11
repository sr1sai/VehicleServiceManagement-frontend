import { Component } from '@angular/core';
import { CURDService } from '../../Service/curd.service';
import { ServiceCenter } from '../../Models/ServiceCenter';

@Component({
  selector: 'app-delete-service-center',
  standalone: false,
  templateUrl: './delete-service-center.component.html',
  styleUrl: './delete-service-center.component.css'
})
export class DeleteServiceCenterComponent {
  constructor(private curdService: CURDService) {}

  id: number = 0;

  DeleteServiceCenter(): void {
    if (this.curdService.DeleteServiceCenter(this.id)) {
      alert('Service Center Deleted Successfully');
    } else {
      alert('Service Center Not Found');
    }
  }

}
