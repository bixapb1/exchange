import { TestBed } from '@angular/core/testing';

import { ExchangerService } from './exchanger.service';

describe('ExchangerService', () => {
  let service: ExchangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
