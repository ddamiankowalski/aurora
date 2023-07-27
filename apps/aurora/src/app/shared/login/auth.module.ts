import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SideNewsComponent } from './components/side-news/side-news.component';
import { CommonModule } from '@angular/common';
import { AuInputModule } from '@aurora/ui';
import { AuButtonModule } from '../../../../../../libs/ui/src/lib/button/button.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: '*',
    redirectTo: '',
  },
];

@NgModule({
  exports: [],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
    AuInputModule,
    AuButtonModule,
  ],
  declarations: [LoginFormComponent, SideNewsComponent, LoginComponent],
})
export class LoginModule {}
