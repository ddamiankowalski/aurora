import { Injectable, NgZone } from '@angular/core';
import { Device } from '../interfaces/device-utils';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceUtilsService {
  private _deviceType$: BehaviorSubject<Device> = new BehaviorSubject<Device>(
    Device.Desktop
  );

  constructor(private _zone: NgZone) {
    this.initializeResizeObserver();
  }

  get getType$(): Observable<Device> {
    return this._deviceType$ as Observable<Device>;
  }

  get getType(): Device {
    return window.innerWidth > 1200 ? Device.Desktop : Device.Mobile;
  }

  get isDesktop$(): Observable<boolean> {
    return this._deviceType$
      .asObservable()
      .pipe(map((type) => type === Device.Desktop));
  }

  private initializeResizeObserver(): void {
    this._deviceType$.next(Device.Desktop);
    new ResizeObserver(() => this.updateDeviceType()).observe(document.body);
  }

  private updateDeviceType(): void {
    this._zone.run(() => {
      this._deviceType$.next(this.getType);
    });
  }
}
