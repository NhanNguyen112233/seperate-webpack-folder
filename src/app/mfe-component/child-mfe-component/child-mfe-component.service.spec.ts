import { TestBed } from '@angular/core/testing';

import { ChildMfeComponentService } from './child-mfe-component.service';

describe('ChildMfeComponentService', () => {
  let service: ChildMfeComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildMfeComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
