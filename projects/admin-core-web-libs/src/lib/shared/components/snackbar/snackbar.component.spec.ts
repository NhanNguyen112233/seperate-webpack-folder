import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSnackbarComponent } from './snackbar.component';

describe('AdminSnackbarComponent', () => {
  let component: AdminSnackbarComponent;
  let fixture: ComponentFixture<AdminSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSnackbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
