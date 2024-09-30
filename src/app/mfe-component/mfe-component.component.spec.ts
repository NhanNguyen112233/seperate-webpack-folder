import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeComponentComponent } from './mfe-component.component';

describe('MfeComponentComponent', () => {
  let component: MfeComponentComponent;
  let fixture: ComponentFixture<MfeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
