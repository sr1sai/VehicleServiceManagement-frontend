import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../Models/Vehicle';
import { ServiceCenter } from '../Models/ServiceCenter';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }
  private url: string = "http://localhost:5235/api/";

  // Get
  Get(url: string): Observable<any> {
    return this.http.get(url);
  }

  ValidateUser(username: string, password: string): Observable<boolean> {
    const validateUrl = `${this.url}Get/ValidateUser?username=${username}&password=${password}`;
    return this.http.get<boolean>(validateUrl);
  }

  GetUserRole(username: string, password: string): Observable<number> {
    const roleUrl = `${this.url}Get/GetUserRole?username=${username}&password=${password}`;
    return this.http.get<number>(roleUrl);
  }

  GetVehicles(): Observable<Vehicle[]> {
    const vehicleUrl = `${this.url}Get/GetVehicles`;
    return this.http.get<Vehicle[]>(vehicleUrl);
  }

  GetServiceCenters(): Observable<ServiceCenter[]> { 
    const serviceCenterUrl = `${this.url}Get/GetServiceCenters`;
    return this.http.get<ServiceCenter[]>(serviceCenterUrl);
   }

   AddVehicle(vehicle:Vehicle){
    const addVehicleUrl = `${this.url}Add/AddVehicle`;
    return this.http.post(addVehicleUrl, vehicle, { responseType: 'text' });
   }

   DeleteVehicle(VIN:string){
    const deleteVehicleUrl = `${this.url}Delete/DeleteVehicleByVIN?VIN=${VIN}`;
    return this.http.delete(deleteVehicleUrl, { responseType: 'text' });
   }

   GetVehicleByVIN(VIN:string):Observable<Vehicle>{
    const getVehicleUrl = `${this.url}Get/GetVehicleByVIN?VIN=${VIN}`;
    return this.http.get<Vehicle>(getVehicleUrl);
   }

   UpdateVehicle(vehicle:Vehicle){
    const updateVehicleUrl = `${this.url}Update/UpdateVehicleByVIN?VIN=${vehicle.vin}`;
    return this.http.put(updateVehicleUrl, vehicle, { responseType: 'text' });
   }

}
