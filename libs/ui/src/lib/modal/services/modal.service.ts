import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Modal, ModalRef } from '../interfaces/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _modalOpen$: Subject<Modal> = new Subject<Modal>();
  private _modalRef$: BehaviorSubject<ModalRef | null> =
    new BehaviorSubject<ModalRef | null>(null);

  get open$(): Observable<Modal> {
    return this._modalOpen$ as Observable<Modal>;
  }

  public openModal(modal: Modal): Observable<ModalRef | null> {
    this._modalOpen$.next(modal);
    return this._modalRef$ as Observable<ModalRef>;
  }

  public setModalRef(modalRef: ModalRef): void {
    this._modalRef$.next(modalRef);
  }
}
