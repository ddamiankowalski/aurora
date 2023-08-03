import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { QuickMenuComponent } from './components/quick-menu/quick-menu.component';
import { AuAvatarModule } from '@aurora/ui';

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
  declarations: [
    DashboardComponent,
    SidenavComponent,
    TopMenuComponent,
    QuickMenuComponent,
  ],
  imports: [RouterModule.forChild(routes), CommonModule, AuAvatarModule],
  exports: [],
})
export class DashboardModule {}
