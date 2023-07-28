import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ClassBinder } from '@aurora/common';

@Component({
  selector: 'au-ui-checkbox',
  templateUrl: './basic-checkbox.component.html',
  styleUrls: ['./basic-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    ClassBinder,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicCheckboxComponent),
      multi: true,
    },
  ],
})
export class BasicCheckboxComponent implements ControlValueAccessor {
  @Input() label?: string;

  private _value = false;
  private _disabled = false;

  private _onChange!: (value: boolean) => void;
  private _onTouched!: () => void;

  constructor(classBinder: ClassBinder) {
    classBinder.bind('basic-checkbox');
  }

  writeValue(value: boolean): void {
    this._value = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }

  onCheckboxClicked(): void {
    this._value = !this._value;
    this._onChange(this._value);
  }
}
