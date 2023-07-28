import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ClassBinder } from '@aurora/common';

@Component({
  selector: 'au-side-news',
  templateUrl: './side-news.component.html',
  styleUrls: ['./side-news.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClassBinder],
})
export class SideNewsComponent {
  menuItems: string[] = ['Language', 'About Us', 'Contact Support'];

  constructor(classBinder: ClassBinder) {
    classBinder.bind('side-news');
  }
}
