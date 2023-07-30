import { ComponentRef } from '@angular/core';
import { Observable } from 'rxjs';

export interface Modal {
  type: ModalType;
  title?: string;
  subtitle?: string;
}

export interface ModalRef {
  componentRef: ComponentRef<any>;
  state$: Observable<ModalState>;
}

export type ModalType = 'dialog';
export enum ModalState {}
