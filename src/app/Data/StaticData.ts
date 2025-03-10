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
          serviceCenterId: 1,
          VIN: 'AB11CD1234',
          model: 'Toyota Camry 2020',
          status: 'In Service',
          lastActionDate: new Date('2025-02-20'),
        },
        {
          serviceCenterId: 2,
          VIN: 'EF11GH5678',
          model: 'Honda Accord 2019',
          status: 'Completed',
          lastActionDate: new Date('2025-02-18'),
        },
        {
          serviceCenterId: 3,
          VIN: 'IJ11KL9101',
          model: 'BMW 320i 2021',
          status: 'In Service',
          lastActionDate: new Date('2025-02-22'),
        },
        {
          serviceCenterId: 4,
          VIN: 'MN11OP2345',
          model: 'Ford Mustang 2020',
          status: 'Completed',
          lastActionDate: new Date('2025-01-30'),
        },
        {
          serviceCenterId: 1,
          VIN: 'QR11ST6789',
          model: 'Tesla Model 3 2022',
          status: 'Scheduled',
          lastActionDate: new Date('2025-02-25'),
        },
        {
          serviceCenterId: 2,
          VIN: 'UV11WX3456',
          model: 'Chevrolet Malibu 2021',
          status: 'In Service',
          lastActionDate: new Date('2025-02-20'),
        },
      ];
}