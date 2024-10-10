import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComponentFirstComponent } from './custom-component-first.component';

describe('CustomComponentFirstComponent', () => {
  let component: CustomComponentFirstComponent;
  let fixture: ComponentFixture<CustomComponentFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomComponentFirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomComponentFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
