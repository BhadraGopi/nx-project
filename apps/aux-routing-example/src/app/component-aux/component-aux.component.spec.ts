import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAuxComponent } from './component-aux.component';

describe('ComponentAuxComponent', () => {
  let component: ComponentAuxComponent;
  let fixture: ComponentFixture<ComponentAuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentAuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
