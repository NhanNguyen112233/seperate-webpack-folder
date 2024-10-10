import { TestBed } from '@angular/core/testing';

import { CustomElementService } from './custom-element.service';

describe('CustomElementService', () => {
  let service: CustomElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
