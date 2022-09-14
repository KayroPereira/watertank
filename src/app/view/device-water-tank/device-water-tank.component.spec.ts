import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceWaterTankComponent } from './device-water-tank.component';

describe('DeviceWaterTankComponent', () => {
  let component: DeviceWaterTankComponent;
  let fixture: ComponentFixture<DeviceWaterTankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceWaterTankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceWaterTankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
