import { TestBed, inject } from '@angular/core/testing';

import { CurrentURLService } from './current-url.service';

describe('CurrentURLService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentURLService]
    });
  });

  it('should be created', inject([CurrentURLService], (service: CurrentURLService) => {
    expect(service).toBeTruthy();
  }));
});
