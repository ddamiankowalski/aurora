import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ClassBinder, DeviceUtilsService } from '@aurora/common';

@Component({
  selector: 'au-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder],
})
export class DashboardComponent {
  constructor(classBinder: ClassBinder, public device: DeviceUtilsService) {
    classBinder.bind('dashboard');
  }
}
