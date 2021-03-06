import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SimquizComponent } from './simquiz/simquiz.component';
import { AdvquizComponent } from './advquiz/advquiz.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: 'simquiz',
    component: SimquizComponent
  },
  {
    path: 'advquiz',
    component: AdvquizComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
