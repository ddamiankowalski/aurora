import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ClassBinder } from '@aurora/common';
import { NavigationItems } from '../../interfaces/menu';

@Component({
  selector: 'au-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder],
})
export class MobileMenuComponent {
  public navItems: NavigationItems = [
    { icon: 'credit-card', name: 'Payments' },
    { icon: 'user-list', name: 'Users' },
    { icon: 'user-add', name: 'Team' },
    { icon: 'inbox', name: 'Inbox' },
  ];

  constructor(classBinder: ClassBinder) {
    classBinder.bind('mobile-menu');
  }
}
