import { ServiceCenter } from "../Models/ServiceCenter";
import { Vehicle } from "../Models/Vehicle";
export class StaticData {
    static serviceCenters: ServiceCenter[]=[
        {
            id: 1,
            name: 'ABC Auto Service'
        },
        {
            id: 2,
            name: 'Speedy Service Center'
        },
        {
            id: 3,
            name: 'Elite Car Service'
        },
        {
            id: 4,
            name: 'QuickFix Service Hub'
        }
    ];
    static vehicles: Vehicle[] = [
        {
          service_center_id: 1,
          vin: 'AB11CD1234',
          model: 'Toyota Camry 2020',
          status: 'In Service',
          date: new Date('2025-02-20'),
        },
        {
          service_center_id: 2,
          vin: 'EF11GH5678',
          model: 'Honda Accord 2019',
          status: 'Completed',
          date: new Date('2025-02-18'),
        },
        {
          service_center_id: 3,
          vin: 'IJ11KL9101',
          model: 'BMW 320i 2021',
          status: 'In Service',
          date: new Date('2025-02-22'),
        },
        {
          service_center_id: 4,
          vin: 'MN11OP2345',
          model: 'Ford Mustang 2020',
          status: 'Completed',
          date: new Date('2025-01-30'),
        },
        {
          service_center_id: 1,
          vin: 'QR11ST6789',
          model: 'Tesla Model 3 2022',
          status: 'Scheduled',
          date: new Date('2025-02-25'),
        },
        {
          service_center_id: 2,
          vin: 'UV11WX3456',
          model: 'Chevrolet Malibu 2021',
          status: 'In Service',
          date: new Date('2025-02-20'),
        },
      ];
}