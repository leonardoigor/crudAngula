/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ObservableService } from './Observable.service';

describe('Service: Observable', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObservableService]
    });
  });

  it('should ...', inject([ObservableService], (service: ObservableService) => {
    expect(service).toBeTruthy();
  }));
});
