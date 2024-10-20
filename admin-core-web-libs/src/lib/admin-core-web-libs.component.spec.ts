import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoreWebLibsComponent } from './admin-core-web-libs.component';

describe('AdminCoreWebLibsComponent', () => {
  let component: AdminCoreWebLibsComponent;
  let fixture: ComponentFixture<AdminCoreWebLibsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCoreWebLibsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCoreWebLibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
