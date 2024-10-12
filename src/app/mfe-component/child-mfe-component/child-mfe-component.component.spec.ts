import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildMfeComponentComponent } from './child-mfe-component.component';

describe('ChildMfeComponentComponent', () => {
  let component: ChildMfeComponentComponent;
  let fixture: ComponentFixture<ChildMfeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildMfeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildMfeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
