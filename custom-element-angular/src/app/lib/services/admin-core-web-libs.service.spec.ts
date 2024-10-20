import { TestBed } from '@angular/core/testing';

import { AdminCoreWebLibsService } from './admin-core-web-libs.service';

describe('AdminCoreWebLibsService', () => {
  let service: AdminCoreWebLibsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCoreWebLibsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
