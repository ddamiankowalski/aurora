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
import { Modal } from '../../interfaces/modal';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';

@Component({
  selector: 'au-ui-modal-outlet',
  templateUrl: './modal-outlet.component.html',
  styleUrls: ['./modal-outlet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder],
})
export class ModalOutletComponent implements OnInit {
  @ViewChild('outletTemplate', { static: true, read: ViewContainerRef })
  private _outletVCR!: ViewContainerRef;
  private _modalRefSet: Set<ComponentRef<any>> = new Set();

  constructor(
    private _classBinder: ClassBinder,
    private _modal: ModalService,
    private _destroyRef: DestroyRef
  ) {
    this._classBinder.bind('modal-outlet');
  }

  ngOnInit(): void {
    this._modal.open$
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((modal) => this.createModal(modal));
  }

  private createModal(modal: Modal): void {
    this.setBackdrop();

    const componentRef = this._outletVCR.createComponent(DialogModalComponent);
    componentRef.onDestroy(() => this.onModalDestroyed(componentRef));

    this._modalRefSet.add(componentRef);

    this.setModalInputs(modal, componentRef);
  }

  private setModalInputs(
    modal: Modal,
    componentRef: ComponentRef<DialogModalComponent>
  ): void {
    componentRef.setInput('modal', modal);
    componentRef.setInput('ref', componentRef);
    componentRef.changeDetectorRef.detectChanges();
  }

  private setBackdrop(): void {
    if (!this._modalRefSet.size) {
      this._classBinder.bind('modal-outlet--active');
    }
  }

  private onModalDestroyed(componentRef: ComponentRef<any>): void {
    this._modalRefSet.delete(componentRef);

    if (!this._modalRefSet.size) {
      this._classBinder.unbind('modal-outlet--active');
    }
  }
}
