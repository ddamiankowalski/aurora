import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ClassBinder } from '@aurora/common';
import { QuickMenuItems } from '../../interfaces/quick-menu';

@Component({
  selector: 'au-quick-menu',
  templateUrl: './quick-menu.component.html',
  styleUrls: ['./quick-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder],
})
export class QuickMenuComponent {
  public items: QuickMenuItems = [
    { icon: 'info' },
    { icon: 'credit-card' },
    { icon: 'inbox' },
  ];

  constructor(classBinder: ClassBinder) {
    classBinder.bind('quick-menu');
  }
}
