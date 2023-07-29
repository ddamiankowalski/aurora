import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassBinder } from '@aurora/common';

@Component({
  selector: 'au-login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClassBinder],
})
export class LoginFormComponent {
  private _loginForm: FormGroup = this._fb.group({
    email: [''],
    password: [''],
    remember: [false],
  });

  constructor(
    classBinder: ClassBinder,
    private _fb: FormBuilder,
    private _router: Router
  ) {
    classBinder.bind('form');
  }

  get loginFormGroup(): FormGroup {
    return this._loginForm;
  }

  get emailControl(): FormControl<string> {
    const email = this._loginForm.get('email');
    if (!email) {
      throw new Error('FormControl was not found');
    }

    return email as FormControl<string>;
  }

  get passwordControl(): FormControl<string> {
    const password = this._loginForm.get('password');
    if (!password) {
      throw new Error('FormControl was not found');
    }

    return password as FormControl<string>;
  }

  public goToSignUp(): void {
    this._router.navigate(['/', 'auth', 'register']);
  }
}
