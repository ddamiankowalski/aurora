import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class ClassBinder {
  private _nativeElement: HTMLElement;

  constructor(private elementRef: ElementRef) {
    if (!elementRef.nativeElement) {
      throw new Error('Could not find nativeElement for ElementRef');
    }
    this._nativeElement = elementRef.nativeElement;
  }

  public bind(className: string): void {
    this._nativeElement.classList.add(className);
  }

  public unbind(className: string): void {
    this._nativeElement.classList.remove(className);
  }
}
