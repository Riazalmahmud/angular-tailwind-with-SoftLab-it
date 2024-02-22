import { TestBed } from '@angular/core/testing';

import { PettrnValidationService } from './pettrn-validation.service';

describe('PettrnValidationService', () => {
  let service: PettrnValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PettrnValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
