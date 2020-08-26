import { TestBed } from '@angular/core/testing';

import { ElectionTypeService } from './election-type.service';

describe('ElectionTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectionTypeService = TestBed.get(ElectionTypeService);
    expect(service).toBeTruthy();
  });
});
