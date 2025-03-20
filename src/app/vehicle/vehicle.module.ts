import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { GetVehicleComponent } from './get-vehicle/get-vehicle.component';
import { DeleteVehicleComponent } from './delete-vehicle/delete-vehicle.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { RouterModule, Routes } from '@angular/router';
import { UppercasePipe } from '../Pipe/uppercase.pipe';


const routes: Routes = [
  { path: 'add-vehicle', component: AddVehicleComponent },
  { path: 'delete-vehicle', component: DeleteVehicleComponent },
  { path: 'get-vehicle', component: GetVehicleComponent },
  { path: 'update-vehicle', component: UpdateVehicleComponent }
];

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
    RouterModule.forChild(routes)
  ],
  providers: [
    UppercasePipe
  ],
  exports: [
    AddVehicleComponent,
    GetVehicleComponent,
    DeleteVehicleComponent,
    UpdateVehicleComponent,
    UppercasePipe,
    RouterModule
  ]
})
export class VehicleModule { }