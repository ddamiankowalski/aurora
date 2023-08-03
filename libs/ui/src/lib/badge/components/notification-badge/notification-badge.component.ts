import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ClassBinder } from '@aurora/common';

@Component({
  selector: 'au-ui-notification-badge',
  templateUrl: './notification-badge.component.html',
  styleUrls: ['./notification-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder],
})
export class NotificationBadgeComponent {
  constructor(classBinder: ClassBinder) {
    classBinder.bind('notification-badge');
  }
}
