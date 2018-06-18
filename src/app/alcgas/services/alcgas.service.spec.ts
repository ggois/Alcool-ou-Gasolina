import { TestBed, inject } from '@angular/core/testing';

import { AlcgasService } from './alcgas.service';

describe('AlcgasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlcgasService]
    });
  });

  it('should be created', inject([AlcgasService], (service: AlcgasService) => {
    expect(service).toBeTruthy();
  }));
});
