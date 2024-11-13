import { TestBed } from '@angular/core/testing';

import { ApiwpService } from './apiwp.service';

describe('ApiwpService', () => {
  let service: ApiwpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiwpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
