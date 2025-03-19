import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { managerAccessGuard } from './manager-access.guard';

describe('managerAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => managerAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
