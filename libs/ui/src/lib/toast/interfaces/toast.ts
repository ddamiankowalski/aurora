export enum ToastType {
  Success,
  Error,
  Warning,
}

export interface ToastInfo {
  title: string;
  description: string;
}

export interface Toast {
  info: ToastInfo;
  type: ToastType;
}
