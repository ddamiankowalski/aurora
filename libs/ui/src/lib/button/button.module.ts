import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicButtonComponent } from './components/basic-button/basic-button.component';

@NgModule({
  exports: [BasicButtonComponent],
  imports: [CommonModule],
  declarations: [BasicButtonComponent],
})
export class AuButtonModule {}
