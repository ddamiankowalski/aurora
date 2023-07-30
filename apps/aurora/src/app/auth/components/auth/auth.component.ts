import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ClassBinder } from '@aurora/common';

@Component({
  selector: 'au-auth-component',
  styleUrls: ['./auth.component.scss'],
  templateUrl: './auth.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClassBinder],
})
export class AuthComponent {
  constructor(classBinder: ClassBinder) {
    classBinder.bind('auth');
  }
}
