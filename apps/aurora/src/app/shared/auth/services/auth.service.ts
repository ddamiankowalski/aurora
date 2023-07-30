import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { RegisterPayload, RegisterResponse } from '../interfaces/register';
import { ToastService } from 'libs/ui/src/lib/toast/services/toast.service';
import { LoginPayoad, LoginResponse } from '../interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _http = inject(HttpClient);
  private _toast = inject(ToastService);

  public registerAccount(payload: RegisterPayload): void {
    this._http
      .post<RegisterResponse>('api/register', payload)
      .pipe(catchError((err) => this._toast.handleError(err)))
      .subscribe(() =>
        this._toast.success('Success', 'Registration completed')
      );
  }

  public login(payload: LoginPayoad): Observable<LoginResponse> {
    return this._http
      .post<LoginResponse>('api/login', payload)
      .pipe(catchError((err) => this._toast.handleError(err)));
  }
}
