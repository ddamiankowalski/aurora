import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ClassBinder } from '@aurora/common';
import { AvatarSize } from '../../interfaces/avatar';

@Component({
  selector: 'au-ui-basic-avatar',
  templateUrl: './basic-avatar.component.html',
  styleUrls: ['./basic-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder],
})
export class BasicAvatarComponent {
  @Input() imageSrc?: string;

  @Input()
  set size(value: AvatarSize) {
    this._classBinder.bind(`basic-avatar--${value}`);
  }

  constructor(private _classBinder: ClassBinder) {
    this._classBinder.bind('basic-avatar');
  }
}
