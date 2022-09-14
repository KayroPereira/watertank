import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeWaterTankComponent } from './resume-water-tank/resume-water-tank.component';

@NgModule({
  declarations: [
    ResumeWaterTankComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    ResumeWaterTankComponent
  ]
})
export class ComponentsModule { }
