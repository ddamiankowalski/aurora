import { NgModule } from '@angular/core';
import { BasicInputComponent } from './components/basic-input/basic-input.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [BasicInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [BasicInputComponent],
})
export class AuInputModule {}
