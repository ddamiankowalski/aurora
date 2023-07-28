import { NgModule } from '@angular/core';
import { BasicCheckboxComponent } from './components/basic-checkbox/basic-checkbox.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BasicCheckboxComponent],
  exports: [BasicCheckboxComponent],
  imports: [CommonModule],
})
export class AuCheckboxModule {}
