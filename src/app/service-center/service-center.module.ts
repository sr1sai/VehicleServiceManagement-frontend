import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AddServiceCenterComponent } from './add-service-center/add-service-center.component';
import { DeleteServiceCenterComponent } from './delete-service-center/delete-service-center.component';
import { GetServiceCenterComponent } from './get-service-center/get-service-center.component';
import { UpdateServiceCenterComponent } from './update-service-center/update-service-center.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddServiceCenterComponent,
    DeleteServiceCenterComponent,
    GetServiceCenterComponent,
    UpdateServiceCenterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule // Add RouterModule to imports array
  ]
})
export class ServiceCenterModule { }
