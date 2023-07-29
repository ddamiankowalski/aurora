import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ClassBinder } from '@aurora/common';

@Component({
  selector: 'au-ui-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClassBinder],
})
export class BasicCardComponent {
  @HostBinding('class.basic-card--active')
  get activeClass() {
    return this.activeCard === this.cardName;
  }

  @Input()
  cardName = '';
  @Input() activeCard = '';
  @Output() activeCardChange: EventEmitter<string> = new EventEmitter();

  constructor(classBinder: ClassBinder) {
    classBinder.bind('basic-card');
  }

  public setActive(): void {
    this.activeCardChange.emit(this.cardName);
  }
}
