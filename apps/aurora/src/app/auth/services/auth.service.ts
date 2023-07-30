import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError } from 'rxjs';
import { RegisterPayload, RegisterResponse } from '../interfaces/register';
import { ToastService } from 'libs/ui/src/lib/toast/services/toast.service';
import { LoginPayoad, LoginResponse } from '../interfaces/login';
import { ModalService } from 'libs/ui/src/lib/modal/services/modal.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _http = inject(HttpClient);
  private _toast = inject(ToastService);
  private _modal = inject(ModalService);
  private _router = inject(Router);

  public registerAccount(payload: RegisterPayload): void {
    this._http
      .post<RegisterResponse>('api/register', payload)
      .pipe(catchError((err) => this._toast.handleError(err)))
      .subscribe(() =>
        this._modal.openModal('dialog', {
          title: 'Registration complete',
          subtitle: 'You have successfully created an account',
          onSuccess: () => this._router.navigate(['/', 'auth', 'login']),
        })
      );
  }

  public login(payload: LoginPayoad): void {
    this._http
      .post<LoginResponse>('api/login', payload)
      .pipe(catchError((err) => this._toast.handleError(err)))
      .subscribe(() => this._router.navigate(['/', 'dashboard']));
  }
}
