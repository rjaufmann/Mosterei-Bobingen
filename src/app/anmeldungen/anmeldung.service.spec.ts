import { TestBed, inject } from '@angular/core/testing';

import { AnmeldungService } from './anmeldung.service';

describe('AnmeldungService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnmeldungService]
    });
  });

  it('should be created', inject([AnmeldungService], (service: AnmeldungService) => {
    expect(service).toBeTruthy();
  }));
});
