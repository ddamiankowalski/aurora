export enum ToastType {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
}

export interface ToastInfo {
  title: string;
  description: string;
}

export interface Toast {
  info: ToastInfo;
  type: ToastType;
}
