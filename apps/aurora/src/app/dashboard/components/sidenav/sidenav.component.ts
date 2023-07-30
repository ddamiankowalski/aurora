import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ClassBinder } from '@aurora/common';
import { NavigationItems } from '../../interfaces/menu';

@Component({
  selector: 'au-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder],
})
export class SidenavComponent {
  public menuItems: NavigationItems = [
    { name: 'home', icon: 'home-alt' },
    { name: 'calendar', icon: 'calendar' },
    { name: 'appointments', icon: 'user-list' },
    { name: 'work schedule', icon: 'check-r' },
    { name: 'workers', icon: 'user' },
  ];

  constructor(classBinder: ClassBinder) {
    classBinder.bind('sidenav');
  }
}
