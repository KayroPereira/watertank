import { ComponentsModule } from './../components/components.module';
import { ResumeWaterTankComponent } from './../components/resume-water-tank/resume-water-tank.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';

import { MainhRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
// import { ResumeWaterTankComponent } from '../components/resume-water-tank/resume-water-tank.component';



@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    // ResumeWaterTankComponent
  ],
  imports: [
    CommonModule,
    MainhRoutingModule,
    ReactiveFormsModule,
    MaterialModule,

    ComponentsModule
  ],
  exports: [
    MainComponent,
  ]
})
export class MainModule { }
