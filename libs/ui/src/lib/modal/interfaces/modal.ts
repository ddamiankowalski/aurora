import { ComponentRef } from '@angular/core';
import { Observable } from 'rxjs';

export interface Modal {
  header: string;
  type: ModalType;
}

export interface ModalRef<T = ComponentRef<any>> {
  componentRef: ComponentRef<T>;
  state$: Observable<ModalState>;
}

export type ModalType = 'dialog';
export enum ModalState {}
