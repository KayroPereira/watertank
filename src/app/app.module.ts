import { MainModule } from './main/main.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule, Routes } from '@angular/router';
import { environment } from './../environments/environment.prod';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';

import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './main/main/main.component';
import { ComponentsModule } from './components/components.module';
import { DeviceWaterTankComponent } from './view/device-water-tank/device-water-tank.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceWaterTankComponent,
    // MainComponent,
    // LoginComponent,
    // RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MainModule,
    AuthModule,
    // ComponentsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
