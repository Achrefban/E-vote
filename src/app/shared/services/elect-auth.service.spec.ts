import { TestBed } from '@angular/core/testing';

import { ElectAuthService } from './elect-auth.service';

describe('ElectAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectAuthService = TestBed.get(ElectAuthService);
    expect(service).toBeTruthy();
  });
});
