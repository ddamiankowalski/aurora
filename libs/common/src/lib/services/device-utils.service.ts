import { Injectable } from "@angular/core";
import { Device } from "../interfaces/device-utils";
import { BehaviorSubject, Observable, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeviceUtilsService {
  private _deviceType$: BehaviorSubject<Device>;

  constructor() {
    this._deviceType$ = new BehaviorSubject(this.getType);
    this.initializeResizeObserver();
  }

  get getType$(): Observable<Device> {
    return this._deviceType$ as Observable<Device>;
  }

  get getType(): Device {
    return window.innerWidth > 1200 ? Device.Desktop : Device.Mobile
  }

  get isDesktop$(): Observable<boolean> {
    return this._deviceType$.pipe(map(type => type === Device.Desktop));
  }

  private initializeResizeObserver(): void {
    new ResizeObserver(() => this.updateDeviceType()).observe(document.body);
  }

  private updateDeviceType(): void {
    this._deviceType$.next(this.getType);
  }
}
