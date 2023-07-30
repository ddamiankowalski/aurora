import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  DestroyRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BasicToastComponent } from '../basic-toast/basic-toast.component';
import { ClassBinder } from '@aurora/common';
import { Toast } from '../../interfaces/toast';

@Component({
  selector: 'au-ui-toast-outlet',
  templateUrl: './toast-outlet.component.html',
  styleUrls: ['./toast-outlet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder],
})
export class ToastOutletComponent implements OnInit {
  @ViewChild('outletTemplate', { static: true, read: ViewContainerRef })
  private _outletVCR!: ViewContainerRef;

  constructor(
    private _toast: ToastService,
    private _destroyRef: DestroyRef,
    classBinder: ClassBinder
  ) {
    classBinder.bind('toast-outlet');
  }

  ngOnInit(): void {
    this._toast.open$
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((toast) => this.createToast(toast));
  }

  private createToast(toast: Toast): void {
    const componentRef = this._outletVCR.createComponent(BasicToastComponent);
    this.setToastInputs(componentRef, toast);
  }

  private setToastInputs(
    componentRef: ComponentRef<BasicToastComponent>,
    toast: Toast
  ): void {
    componentRef.setInput('toast', toast);
    componentRef.setInput('componentRef', componentRef);
    componentRef.changeDetectorRef.detectChanges();
  }
}
