import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { RegisterPayload, RegisterResponse } from '../interfaces/register';
import { ToastService } from 'libs/ui/src/lib/toast/services/toast.service';
import { ToastType } from 'libs/ui/src/lib/toast/interfaces/toast';
import { LoginPayoad, LoginResponse } from '../interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _http = inject(HttpClient);
  private _toast = inject(ToastService);

  public registerAccount(
    payload: RegisterPayload
  ): Observable<RegisterResponse> {
    return this._http
      .post<RegisterResponse>('api/register', payload)
      .pipe(
        catchError((err) => {
          const error = err.error;
          this._toast.openToast({
            type: ToastType.Error,
            info: {
              title: error.errorType,
              description: error.message,
            },
          });
          return EMPTY;
        })
      );
  }

  public login(payload: LoginPayoad): Observable<LoginResponse> {
    return this._http.post<LoginResponse>('api/login', payload).pipe(catchError((err) => {
      const error = err.error;
      this._toast.openToast({
        type: ToastType.Error,
        info: {
          title: error.errorType,
          description: error.message,
        },
      });
      return EMPTY;
    }))
  }
}
