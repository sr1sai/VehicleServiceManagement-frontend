import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { employeeAccessGuard } from './employee-access.guard';

describe('employeeAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => employeeAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
