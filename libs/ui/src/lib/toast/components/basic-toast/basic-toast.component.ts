import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ClassBinder } from '@aurora/common';
import { Toast } from '../../interfaces/toast';

@Component({
  selector: 'au-ui-basic-toast',
  templateUrl: './basic-toast.component.html',
  styleUrls: ['./basic-toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClassBinder],
})
export class BasicToastComponent {
  @Input() toast?: Toast;
  @Input() componentRef?: ComponentRef<BasicToastComponent>;

  private _time = new Date();

  constructor(classBinder: ClassBinder) {
    classBinder.bind('basic-toast');
  }

  get title(): string {
    return this.toast?.info.title ?? '';
  }

  get description(): string {
    return this.toast?.info.description ?? '';
  }

  get time(): string {
    return this._time.toLocaleTimeString();
  }

  public closeToast(): void {
    this.componentRef?.destroy();
  }
}
