import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SideNewsComponent } from './components/side-news/side-news.component';
import { CommonModule } from '@angular/common';
import { AuInputModule } from '@aurora/ui';
import { AuButtonModule } from '../../../../../../libs/ui/src/lib/button/button.module';
import { AuCheckboxModule } from '../../../../../../libs/ui/src/lib/checkbox/checkbox.module';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuCardsModule } from '../../../../../../libs/ui/src/lib/cards/cards.module';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
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
  ],
  declarations: [
    LoginFormComponent,
    SideNewsComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    RegisterFormComponent,
  ],
})
export class LoginModule {}
