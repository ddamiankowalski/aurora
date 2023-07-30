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
import { ClassBinder } from '@aurora/common';
import { ModalService } from '../../services/modal.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Modal, ModalRef } from '../../interfaces/modal';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';

@Component({
  selector: 'au-ui-modal-outlet',
  templateUrl: './modal-outlet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder],
})
export class ModalOutletComponent implements OnInit {
  @ViewChild('outletTemplate', { static: true, read: ViewContainerRef })
  private _outletVCR!: ViewContainerRef;

  constructor(
    classBinder: ClassBinder,
    private _modal: ModalService,
    private _destroyRef: DestroyRef
  ) {
    classBinder.bind('modal-outlet');
  }

  ngOnInit(): void {
    this._modal.open$
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((modal) => this.createModal(modal));
  }

  private createModal(modal: Modal): void {
    const componentRef = this._outletVCR.createComponent(DialogModalComponent);
    // componentRef.injector = this.setModalInputs(modal, componentRef);
    // this._modal.setModalRef({ componentRef });
  }

  private setModalInputs(
    modal: Modal,
    componentRef: ComponentRef<DialogModalComponent>
  ): void {
    console.log(modal);
    componentRef.changeDetectorRef.detectChanges();
  }
}