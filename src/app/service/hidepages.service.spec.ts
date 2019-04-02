import { TestBed } from '@angular/core/testing';

import { HidepagesService } from './hidepages.service';

describe('HidepagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HidepagesService = TestBed.get(HidepagesService);
    expect(service).toBeTruthy();
  });
});
