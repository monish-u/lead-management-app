import { TestBed } from '@angular/core/testing';

import { FetchQuoteService } from './fetch-quote.service';

describe('FetchQuoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchQuoteService = TestBed.get(FetchQuoteService);
    expect(service).toBeTruthy();
  });
});
