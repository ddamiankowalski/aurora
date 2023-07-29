import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ClassBinder } from '@aurora/common';

@Component({
  selector: 'au-register-component',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClassBinder],
})
export class RegisterComponent {
  constructor(classBinder: ClassBinder) {
    classBinder.bind('register');
  }
}
