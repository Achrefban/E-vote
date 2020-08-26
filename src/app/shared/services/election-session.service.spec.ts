import { TestBed } from '@angular/core/testing';

import { ElectionSessionService } from './election-session.service';

describe('ElectionSessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectionSessionService = TestBed.get(ElectionSessionService);
    expect(service).toBeTruthy();
  });
});
