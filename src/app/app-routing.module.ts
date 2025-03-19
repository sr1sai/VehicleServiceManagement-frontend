import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddServiceCenterComponent } from './service-center/add-service-center/add-service-center.component';
import { DeleteServiceCenterComponent } from './service-center/delete-service-center/delete-service-center.component';
import { GetServiceCenterComponent } from './service-center/get-service-center/get-service-center.component';
import { UpdateServiceCenterComponent } from './service-center/update-service-center/update-service-center.component';
import { AddVehicleComponent } from './vehicle/add-vehicle/add-vehicle.component';
import { DeleteVehicleComponent } from './vehicle/delete-vehicle/delete-vehicle.component';
import { GetVehicleComponent } from './vehicle/get-vehicle/get-vehicle.component';
import { UpdateVehicleComponent } from './vehicle/update-vehicle/update-vehicle.component';
import { LoginComponent } from './login/login.component';
import { managerAccessGuard } from './Gaurds/manager-access.guard';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent},
  { path: 'add-vehicle', component: AddVehicleComponent},
  { path: 'delete-vehicle', component: DeleteVehicleComponent},
  { path: 'get-vehicle', component: GetVehicleComponent},
  { path: 'update-vehicle', component: UpdateVehicleComponent},
  { path: 'add-service', component: AddServiceCenterComponent, canActivate: [managerAccessGuard]},
  { path: 'delete-service', component: DeleteServiceCenterComponent, canActivate: [managerAccessGuard]},
  { path: 'get-service', component: GetServiceCenterComponent, canActivate: [managerAccessGuard]},
  { path: 'update-service', component: UpdateServiceCenterComponent, canActivate: [managerAccessGuard]},
  { path: 'un-authorized', component:UnAuthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
