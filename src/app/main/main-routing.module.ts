import { ResumeWaterTankComponent } from './../components/resume-water-tank/resume-water-tank.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home',
    children: [
      // { path: 'begin', loadChildren: () => import('../components/components.module').then(m => m.ComponentsModule) },
      // { path: 'home', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },

      // { path: 'begin', component: HomeComponent, children: [
      //   // {path: 'home/begin', component: ResumeWaterTankComponent, outlet: 'favorite-home'}
      // ]},

      { path: 'begin', component: HomeComponent, 
        children: [
          { path: '', loadChildren: () => import('./../components/components.module').then(m => m.ComponentsModule) },
        ]
      },
      
      // { path: 'begin', component: HomeComponent},
      // { path: 'begin', component: ResumeWaterTankComponent, outlet: 'favoriteHome' },
      
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainhRoutingModule { }