import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassBinder } from '@aurora/common';

@Component({
  selector: 'au-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClassBinder],
})
export class RegisterFormComponent {
  private _registerForm: FormGroup = this._fb.group({
    email: [''],
    password: [''],
    remember: [false],
  });

  constructor(
    classBinder: ClassBinder,
    private _fb: FormBuilder,
    private _router: Router
  ) {
    classBinder.bind('register-form');
  }

  get registerFormGroup(): FormGroup {
    return this._registerForm;
  }

  get emailControl(): FormControl<string> {
    const email = this._registerForm.get('email');
    if (!email) {
      throw new Error('FormControl was not found');
    }

    return email as FormControl<string>;
  }

  get passwordControl(): FormControl<string> {
    const password = this._registerForm.get('password');
    if (!password) {
      throw new Error('FormControl was not found');
    }

    return password as FormControl<string>;
  }

  public goToSignIn(): void {
    this._router.navigate(['/', 'auth', 'login']);
  }
}
