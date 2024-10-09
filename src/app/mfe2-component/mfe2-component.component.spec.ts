import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe2ComponentComponent } from './mfe2-component.component';

describe('Mfe2ComponentComponent', () => {
  let component: Mfe2ComponentComponent;
  let fixture: ComponentFixture<Mfe2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mfe2ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mfe2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
