import { TestBed } from '@angular/core/testing';

import { CURDService } from './curd.service';

describe('ServicesService', () => {
  let service: CURDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CURDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
