import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialReactComponent } from './trial-react.component';

describe('TrialReactComponent', () => {
  let component: TrialReactComponent;
  let fixture: ComponentFixture<TrialReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialReactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
