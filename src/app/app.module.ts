import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DirectivesDirective } from './Directive/directives.directive';
import { ServiceCenterModule } from './service-center/service-center.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VehicleModule } from './vehicle/vehicle.module';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DirectivesDirective,
    LoginComponent,
    UnAuthorizedComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ServiceCenterModule,
    VehicleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
