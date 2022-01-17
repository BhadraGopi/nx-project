import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSwitchMapComponent } from './simple-switch-map.component';

describe('SimpleSwitchMapComponent', () => {
  let component: SimpleSwitchMapComponent;
  let fixture: ComponentFixture<SimpleSwitchMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleSwitchMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSwitchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
