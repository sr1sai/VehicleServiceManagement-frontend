import { Injectable } from '@angular/core';
import { Vehicle } from '../Models/Vehicle';
import { StaticData } from '../Data/StaticData';
import { ServiceCenter } from '../Models/ServiceCenter';

@Injectable({
  providedIn: 'root'
})
export class CURDService {
  

  constructor() { }
  GetVehicles():Vehicle[] {
    return StaticData.vehicles;
  }
  GetServiceCenters():ServiceCenter[] {
    return StaticData.serviceCenters;
  }
  GetServiceCenterByID(id:number):ServiceCenter | null {
    return StaticData.serviceCenters.find(sc => sc.id == id) || null;
  }
  GetVehicleByVin(vin:string):Vehicle | null {
    return StaticData.vehicles.find(v => v.VIN === vin) || null;
  }
  UpdateVehicle(VIN: string, newVehicle: Vehicle): boolean {
    const index = StaticData.vehicles.findIndex(v => v.VIN === VIN);
    if (index >= 0) {
      StaticData.vehicles.splice(index, 1, newVehicle);
      return true;
    }
    return false;
  }
  UpdateServiceCenter(id: number, newServiceCenter: ServiceCenter): boolean {
    const index = StaticData.serviceCenters.findIndex(sc => sc.id == id);
    if (index >= 0) {
      StaticData.serviceCenters.splice(index, 1, newServiceCenter);
      return true;
    }
    return false;
  }
  UpdateVehicleStatus(vin:string, status:string):boolean {
    const vehicle = this.GetVehicleByVin(vin);
    if(vehicle) {
      vehicle.status = status;
      return true;
    }
    return false;
  }
  UpdateVehicleServiceCenter(vin:string, serviceCenterId:number):boolean {
    const vehicle = this.GetVehicleByVin(vin);
    if(vehicle) {
      vehicle.serviceCenterId = serviceCenterId;
      return true;
    }
    return false;
  }
  AddVehicle(vehicle:Vehicle):boolean {
    if(this.GetVehicleByVin(vehicle.VIN)) {
      return false;
    }
    StaticData.vehicles.push(vehicle);
    console.log(StaticData.vehicles);
    return true;
  }
  AddServiceCenter(serviceCenter:ServiceCenter):boolean {
    if(StaticData.serviceCenters.find(sc => sc.id === serviceCenter.id)) {
      return false;
    }
    StaticData.serviceCenters.push(serviceCenter);
    return true;
  }
  DeleteVehicle(vin:string):boolean {
    const index = StaticData.vehicles.findIndex(v => v.VIN === vin);
    if(index >= 0) {
      StaticData.vehicles.splice(index, 1);
      return true;
    }
    return false;
  }
  DeleteServiceCenter(id: number): boolean {
    const index = StaticData.serviceCenters.findIndex(sc => sc.id == id);
    if (index >= 0) {
      StaticData.serviceCenters.splice(index, 1);
      // Delete all vehicles associated with this service center
      StaticData.vehicles = StaticData.vehicles.filter(v => v.serviceCenterId != id);
      return true;
    }
    return false;
  } 

}
