import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeWaterTankComponent } from './resume-water-tank.component';

describe('ResumeWaterTankComponent', () => {
  let component: ResumeWaterTankComponent;
  let fixture: ComponentFixture<ResumeWaterTankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeWaterTankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeWaterTankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
