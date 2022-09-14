import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  // { path: 'home', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  // { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  // { path: 'home', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  // { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  
  { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
  // { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
