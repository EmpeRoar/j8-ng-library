import { TestBed } from '@angular/core/testing';

import { J8NgUtilsService } from './j8-ng-utils.service';

describe('J8NgUtilsService', () => {
  let service: J8NgUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(J8NgUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
