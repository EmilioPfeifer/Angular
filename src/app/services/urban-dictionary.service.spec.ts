import { TestBed } from '@angular/core/testing';

import { UrbanDictionaryService } from './urban-dictionary.service';

describe('UrbanDictionaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrbanDictionaryService = TestBed.get(UrbanDictionaryService);
    expect(service).toBeTruthy();
  });
});
