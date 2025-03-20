import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { managerAccessGuard } from './Gaurds/manager-access.guard';
import { LoginComponent } from './login/login.component';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { 
    path: 'vehicle', 
    loadChildren: () => import('./vehicle/vehicle.module').then(m => m.VehicleModule)
  },
  { 
    path: 'service', 
    loadChildren: () => import('./service-center/service-center.module').then(m => m.ServiceCenterModule), 
    canActivate: [managerAccessGuard]
  },
  { path: 'un-authorized', component: UnAuthorizedComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
