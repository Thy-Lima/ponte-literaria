import { TestBed } from '@angular/core/testing';

import { LeitoresService } from './leitores.service';

describe('LeitoresService', () => {
  let service: LeitoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeitoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
