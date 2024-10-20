import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormFieldComponent } from './admin-form-field.component';

describe('AdminFormFieldComponent', () => {
  let component: AdminFormFieldComponent;
  let fixture: ComponentFixture<AdminFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminFormFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
