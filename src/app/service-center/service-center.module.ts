import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddServiceCenterComponent } from './add-service-center/add-service-center.component';
import { DeleteServiceCenterComponent } from './delete-service-center/delete-service-center.component';
import { GetServiceCenterComponent } from './get-service-center/get-service-center.component';
import { UpdateServiceCenterComponent } from './update-service-center/update-service-center.component';

const routes: Routes = [
  { path: 'add-service-center', component: AddServiceCenterComponent },
  { path: 'delete-service-center', component: DeleteServiceCenterComponent },
  { path: 'get-service-center', component: GetServiceCenterComponent },
  { path: 'update-service-center', component: UpdateServiceCenterComponent }
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
    RouterModule.forChild(routes)
  ]
})
export class ServiceCenterModule { }
