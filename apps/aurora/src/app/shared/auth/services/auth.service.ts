import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { RegisterPayload } from '../interfaces/register';
import { ToastService } from 'libs/ui/src/lib/toast/services/toast.service';
import { ToastType } from 'libs/ui/src/lib/toast/interfaces/toast';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _http = inject(HttpClient);
  private _toast = inject(ToastService);

  public registerAccount(
    payload: RegisterPayload
  ): Observable<{ status: number; message: string }> {
    return this._http
      .post<{ status: number; message: string }>('api/register', payload)
      .pipe(
        catchError((err) => {
          const error = err.error;
          this._toast.openToast({
            type: ToastType.Success,
            info: {
              title: error.errorType,
              description: error.message,
            },
          });
          return EMPTY;
        })
      );
  }
}
