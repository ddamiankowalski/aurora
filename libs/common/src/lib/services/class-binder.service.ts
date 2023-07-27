import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class ClassBinder {
  constructor(private _elementRef: ElementRef) {}

  public bind(className: string): void {
    this._elementRef.nativeElement.classList.add(className);
  }

  public unbind(className: string): void {
    this._elementRef.nativeElement.classList.remove(className);
  }
}
