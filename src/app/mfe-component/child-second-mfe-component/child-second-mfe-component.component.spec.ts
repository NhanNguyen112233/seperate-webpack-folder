import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSecondMfeComponentComponent } from './child-second-mfe-component.component';

describe('ChildSecondMfeComponentComponent', () => {
  let component: ChildSecondMfeComponentComponent;
  let fixture: ComponentFixture<ChildSecondMfeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildSecondMfeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildSecondMfeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
