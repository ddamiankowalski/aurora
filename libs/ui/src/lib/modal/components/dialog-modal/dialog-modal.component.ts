import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ClassBinder } from '@aurora/common';
import { Modal, ModalRef } from '../../interfaces/modal';
import { AuButtonModule } from '../../../button/button.module';

@Component({
  standalone: true,
  selector: 'au-ui-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder],
  imports: [AuButtonModule],
})
export class DialogModalComponent {
  @Input() modal?: Modal;
  @Input({ required: true }) ref?: ModalRef;

  constructor(classBinder: ClassBinder) {
    classBinder.bind('dialog-modal');
  }

  onSuccess(): void {
    this.runOnSuccess();
    this.closeDialog();
  }

  private runOnSuccess(): void {
    if (this.modal?.info.onSuccess) {
      this.modal.info.onSuccess();
    }
    this.closeDialog();
  }

  private closeDialog(): void {
    if (!this.ref) {
      throw new Error('No ModalRef provided!');
    }

    this.ref.destroy();
  }
}
