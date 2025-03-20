import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule
import { AddServiceCenterComponent } from './add-service-center/add-service-center.component';
import { DeleteServiceCenterComponent } from './delete-service-center/delete-service-center.component';
import { GetServiceCenterComponent } from './get-service-center/get-service-center.component';
import { UpdateServiceCenterComponent } from './update-service-center/update-service-center.component';
import { FormsModule } from '@angular/forms';
import { managerAccessGuard } from '../Gaurds/manager-access.guard';

const routes: Routes = [
  { path: 'add-service', component: AddServiceCenterComponent, canActivate: [managerAccessGuard] },
  { path: 'delete-service', component: DeleteServiceCenterComponent, canActivate: [managerAccessGuard] },
  { path: 'get-service', component: GetServiceCenterComponent, canActivate: [managerAccessGuard] },
  { path: 'update-service', component: UpdateServiceCenterComponent, canActivate: [managerAccessGuard] }
];

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
    RouterModule.forChild(routes) // Add RouterModule to imports array
  ],
  exports: [RouterModule]
})
export class ServiceCenterModule { }
