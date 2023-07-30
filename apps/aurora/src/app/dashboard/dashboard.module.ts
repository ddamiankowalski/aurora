import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: '*',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [DashboardComponent, SidenavComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [],
})
export class DashboardModule {}
