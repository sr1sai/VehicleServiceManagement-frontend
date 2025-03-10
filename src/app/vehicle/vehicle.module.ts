import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { GetVehicleComponent } from './get-vehicle/get-vehicle.component';
import { DeleteVehicleComponent } from './delete-vehicle/delete-vehicle.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddVehicleComponent,
    GetVehicleComponent,
    DeleteVehicleComponent,
    UpdateVehicleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
  ],
  exports: [
  ]
})
export class VehicleModule { }