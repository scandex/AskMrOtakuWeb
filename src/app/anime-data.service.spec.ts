import { TestBed, inject } from '@angular/core/testing';

import { AnimeDataService } from './anime-data.service';

describe('AnimeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimeDataService]
    });
  });

  it('should ...', inject([AnimeDataService], (service: AnimeDataService) => {
    expect(service).toBeTruthy();
  }));
});
