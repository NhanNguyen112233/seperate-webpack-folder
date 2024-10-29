import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessLaptopsComponent } from './business-laptops.component';

describe('BusinessLaptopsComponent', () => {
  let component: BusinessLaptopsComponent;
  let fixture: ComponentFixture<BusinessLaptopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessLaptopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
