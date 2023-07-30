import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';
import { Toast, ToastType } from '../interfaces/toast';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _toastOpen$: Subject<Toast> = new Subject<Toast>();

  get open$(): Observable<Toast> {
    return this._toastOpen$ as Observable<Toast>;
  }

  public openToast(toast: Toast): void {
    this._toastOpen$.next(toast);
  }

  public handleError(err: Record<string, any>): Observable<never> {
    {
      const error = err['error'];
      this.openToast({
        type: ToastType.Error,
        info: {
          title: error.errorType,
          description: error.message,
        },
      });
      return EMPTY;
    }
  }

  public success(title: string, description: string): void {
    this.openToast({
      type: ToastType.Success,
      info: { title, description },
    });
  }
}
