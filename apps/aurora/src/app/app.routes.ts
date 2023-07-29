import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./shared/auth/auth.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];
