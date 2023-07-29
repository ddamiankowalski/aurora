import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassBinder } from '@aurora/common';
import { RegisterStep } from '../../interfaces/register';

@Component({
  selector: 'au-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClassBinder],
})
export class RegisterFormComponent {
  public activeCard = '';
  private _currentStep: RegisterStep = RegisterStep.Credentials;

  private _registerForm: FormGroup = this._fb.group({
    email: [''],
    password: [''],
    repeatPassword: [''],
    firstName: [''],
    lastName: [''],
  });

  constructor(
    classBinder: ClassBinder,
    private _fb: FormBuilder,
    private _router: Router
  ) {
    classBinder.bind('register-form');
  }

  get step(): RegisterStep {
    return this._currentStep;
  }

  get registerFormGroup(): FormGroup {
    return this._registerForm;
  }

  getRegisterControl(name: string): FormControl {
    const control = this._registerForm.get(name);
    if (!control) {
      throw new Error(`Could not find control with name: ${name}`);
    }
    return this._registerForm.get(name) as FormControl;
  }

  public goToSignIn(): void {
    this._router.navigate(['/', 'auth', 'login']);
  }

  public proceed(): void {
    if (this._currentStep === RegisterStep.Credentials) {
      this._currentStep = RegisterStep.Personal;
    }
  }

  public return(): void {
    this._currentStep = RegisterStep.Credentials;
  }
}
