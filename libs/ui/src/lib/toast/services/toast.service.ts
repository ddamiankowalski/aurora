import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Toast } from '../interfaces/toast';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _toastOpen$: Subject<Toast> = new Subject<Toast>();

  public openToast(toast: Toast): void {
    this._toastOpen$.next(toast);
  }

  get open$(): Observable<Toast> {
    return this._toastOpen$ as Observable<Toast>;
  }
}
