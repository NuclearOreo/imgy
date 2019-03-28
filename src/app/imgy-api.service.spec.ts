import { TestBed } from '@angular/core/testing';

import { ImgyApiService } from './imgy-api.service';

describe('ImgyApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImgyApiService = TestBed.get(ImgyApiService);
    expect(service).toBeTruthy();
  });
});
