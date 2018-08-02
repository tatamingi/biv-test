import { TestBed, inject } from '@angular/core/testing';

import { FullDataService } from './full-data.service';

describe('FullDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FullDataService]
    });
  });

  it('should be created', inject([FullDataService], (service: FullDataService) => {
    expect(service).toBeTruthy();
  }));
});
