import { TestBed, inject } from '@angular/core/testing';

import { RouterPathsService } from './router-paths.service';

describe('RouterPathsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterPathsService]
    });
  });

  it('should be created', inject([RouterPathsService], (service: RouterPathsService) => {
    expect(service).toBeTruthy();
  }));
});
