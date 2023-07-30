import { ComponentRef } from '@angular/core';

export interface ModalInfo {
  title?: string;
  subtitle?: string;
  onSuccess?: () => void;
}

export interface Modal {
  info: ModalInfo;
  type: ModalType;
}

export type ModalRef = ComponentRef<any>;

export type ModalType = 'dialog';
