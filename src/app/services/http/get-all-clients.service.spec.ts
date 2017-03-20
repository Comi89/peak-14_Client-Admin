import { TestBed, inject } from '@angular/core/testing';

import { GetAllClientsService } from './get-all-clients.service';

describe('GetAllClientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllClientsService]
    });
  });

  it('should ...', inject([GetAllClientsService], (service: GetAllClientsService) => {
    expect(service).toBeTruthy();
  }));
});
