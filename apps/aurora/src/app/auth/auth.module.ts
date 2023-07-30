import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SideNewsComponent } from './components/side-news/side-news.component';
import { CommonModule } from '@angular/common';
import { AuInputModule } from '@aurora/ui';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AuButtonModule } from 'libs/ui/src/lib/button/button.module';
import { AuCheckboxModule } from '../../../../../libs/ui/src/lib/checkbox/checkbox.module';
import { AuCardsModule } from '../../../../../libs/ui/src/lib/cards/cards.module';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginFormComponent },
      { path: 'register', component: RegisterFormComponent },
      { path: '**', redirectTo: 'login' },
    ],
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
    AuCheckboxModule,
    AuCardsModule,
    HttpClientModule,
  ],
  declarations: [
    LoginFormComponent,
    SideNewsComponent,
    AuthComponent,
    RegisterFormComponent,
  ],
})
export class AuthModule {}
