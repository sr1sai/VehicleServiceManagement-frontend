import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../Models/Vehicle';
import { ServiceCenter } from '../Models/ServiceCenter';
import { UserDetails } from '../Models/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }
  private url: string = "http://localhost:5235/api/";

  // Function to get the token from localStorage
  private getAuthToken(): string | null {
    return localStorage.getItem('authToken'); // Retrieve the token from localStorage
  }

  // Function to create headers with Bearer token
  private createAuthorizationHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); // Retrieve the token from localStorage
    return new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '' // Attach the token to the Authorization header
    });
  }
  

  // Get
  Get(url: string): Observable<any> {
    const headers = this.createAuthorizationHeaders(); // Get headers with token
    return this.http.get(url, { headers }); // Add headers to the GET request
  }

  ValidateUser(username: string, password: string): Observable<any> {
    const validateUrl = `${this.url}Get/ValidateUser?username=${username}&password=${password}`;
    return this.http.get<any>(validateUrl);
  }

  GetUserRole(username: string, password: string): Observable<number> {
    const roleUrl = `${this.url}Get/GetUserRole?username=${username}&password=${password}`;
    const headers = this.createAuthorizationHeaders(); // Add Authorization header
    return this.http.get<number>(roleUrl, { headers });
  }

  GetVehicles(): Observable<Vehicle[]> {
    const vehicleUrl = `${this.url}Get/GetVehicles`;
    const headers = this.createAuthorizationHeaders(); // Add Authorization header
    return this.http.get<Vehicle[]>(vehicleUrl, { headers });
  }

  GetServiceCenters(): Observable<ServiceCenter[]> {
    const serviceCenterUrl = `${this.url}Get/GetServiceCenters`;
    const headers = this.createAuthorizationHeaders(); // Add Authorization header
    return this.http.get<ServiceCenter[]>(serviceCenterUrl, { headers });
  }

  GetServiceCentersForVehicle(): Observable<ServiceCenter[]> {
    const serviceCenterUrl = `${this.url}Get/GetServiceCenters`;
    const headers = this.createAuthorizationHeaders(); // Add Authorization header
    return this.http.get<ServiceCenter[]>(serviceCenterUrl, { headers });
  }

  // AddVehicle
  AddVehicle(vehicle: Vehicle) {
    const addVehicleUrl = `${this.url}Add/AddVehicle`;
    const headers = this.createAuthorizationHeaders(); // Add Authorization header
    return this.http.post(addVehicleUrl, vehicle, { headers, responseType: 'text' });
  }

  // DeleteVehicle
  DeleteVehicle(VIN: string) {
    const deleteVehicleUrl = `${this.url}Delete/DeleteVehicleByVIN?VIN=${VIN}`;
    const headers = this.createAuthorizationHeaders(); // Add Authorization header
    return this.http.delete(deleteVehicleUrl, { headers, responseType: 'text' });
  }

  // GetVehicleByVIN
  GetVehicleByVIN(VIN: string): Observable<Vehicle> {
    const getVehicleUrl = `${this.url}Get/GetVehicleByVIN?VIN=${VIN}`;
    const headers = this.createAuthorizationHeaders(); // Add Authorization header
    return this.http.get<Vehicle>(getVehicleUrl, { headers });
  }

  // UpdateVehicle
  UpdateVehicle(vehicle: Vehicle) {
    const updateVehicleUrl = `${this.url}Update/UpdateVehicleByVIN?VIN=${vehicle.vin}`;
    const headers = this.createAuthorizationHeaders(); // Add Authorization header
    return this.http.put(updateVehicleUrl, vehicle, { headers, responseType: 'text' });
  }

  // AddServiceCenter
  AddServcieCenter(serviceCenter: ServiceCenter) {
    const addServiceCenterUrl = `${this.url}Add/AddServiceCenter`;
    const headers = this.createAuthorizationHeaders(); // Add Authorization header
    return this.http.post(addServiceCenterUrl, serviceCenter, { headers, responseType: 'text' });
  }

  // UpdateServiceCenter
  UpdateServiceCenter(id: number, serviceCenter: ServiceCenter) {
    const updateServiceCenterUrl = `${this.url}Update/UpdateServiceCenterByID?id=${id}`;
    const headers = this.createAuthorizationHeaders(); // Add Authorization header
    return this.http.put(updateServiceCenterUrl, serviceCenter, { headers, responseType: 'text' });
  }

  // DeleteServiceCenter
  DeleteServiceCenter(id: number) {
    const deleteServiceCenterUrl = `${this.url}Delete/DeleteServiceCenterByID?id=${id}`;
    const headers = this.createAuthorizationHeaders(); // Add Authorization header
    return this.http.delete(deleteServiceCenterUrl, { headers, responseType: 'text' });
  }

  // DeleteVehicleByServiceCenterID
  DeleteVehicleByServiceCenterID(id: number) {
    const deleteVehicleByServiceCenterIDUrl = `${this.url}Delete/DeleteVehiclesByServiceCenterID?id=${id}`;
    const headers = this.createAuthorizationHeaders(); // Add Authorization header
    return this.http.delete(deleteVehicleByServiceCenterIDUrl, { headers, responseType: 'text' });
  }

  // AddUser
  AddUser(user: UserDetails) {
    const addUserUrl = `${this.url}Add/AddUser`;
    const headers = this.createAuthorizationHeaders(); // Add Authorization header
    return this.http.post(addUserUrl, { "userName": user.username, "password": user.password, "role": user.role }, { headers, responseType: 'text' });
  }

  // UpdateUser
  UpdateUser(username: string, password: string, user: UserDetails) {
    const updateUserUrl = `${this.url}Update/UpdateUser?username=${username}&password=${password}`;
    const headers = this.createAuthorizationHeaders(); // Add Authorization header
    return this.http.put(updateUserUrl, { "userName": user.username, "password": user.password, "role": user.role }, { headers, responseType: 'text' });
  }

  // DeleteUser
  DeleteUser(username: string, password: string) {
    const deleteUserUrl = `${this.url}Delete/DeleteUser?userName=${username}&password=${password}`;
    const headers = this.createAuthorizationHeaders(); // Add Authorization header
    return this.http.delete(deleteUserUrl, { headers, responseType: 'text' });
  }

}
