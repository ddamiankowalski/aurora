import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Modal } from '../interfaces/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _modalOpen$: Subject<Modal> = new Subject<Modal>();

  get open$(): Observable<Modal> {
    return this._modalOpen$ as Observable<Modal>;
  }

  public openModal(modal: Modal): void {
    this._modalOpen$.next(modal);
  }
}
