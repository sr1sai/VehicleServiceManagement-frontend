import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { GetVehicleComponent } from './get-vehicle/get-vehicle.component';
import { DeleteVehicleComponent } from './delete-vehicle/delete-vehicle.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { RouterModule } from '@angular/router';
import { UppercasePipe } from '../Pipe/uppercase.pipe';

@NgModule({
  declarations: [
    AddVehicleComponent,
    GetVehicleComponent,
    DeleteVehicleComponent,
    UpdateVehicleComponent,
    UppercasePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    UppercasePipe
  ],
  exports: [
    AddVehicleComponent,
    GetVehicleComponent,
    DeleteVehicleComponent,
    UpdateVehicleComponent,
    UppercasePipe
  ]
})
export class VehicleModule { }