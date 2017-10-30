import { TestBed, inject } from '@angular/core/testing';

import { VclistService } from './vclist.service';

describe('VclistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VclistService]
    });
  });

  it('should be created', inject([VclistService], (service: VclistService) => {
    expect(service).toBeTruthy();
  }));
});
