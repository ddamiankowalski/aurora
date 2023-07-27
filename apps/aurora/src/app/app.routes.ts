import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('./shared/login/auth.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
