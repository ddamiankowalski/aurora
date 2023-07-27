import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'login',
    loadChildren: () => import('./shared/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    loadChildren: () => import('./shared/login/login.module').then(m => m.LoginModule)
  }
];
