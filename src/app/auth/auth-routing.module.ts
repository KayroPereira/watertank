import { DeviceWaterTankComponent } from './../view/device-water-tank/device-water-tank.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // { path: 'auth/login', component: LoginComponent},
  // { path: '', redirectTo: 'login'},
  { path: 'auth', children: [
    // { path: 'login', component: LoginComponent},
    { path: 'login', component: DeviceWaterTankComponent},
    { path: 'register', component: RegisterComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
