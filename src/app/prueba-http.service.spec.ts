import { TestBed } from '@angular/core/testing';

import { PruebaHttpService } from './prueba-http.service';

describe('PruebaHttpService', () => {
  let service: PruebaHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
