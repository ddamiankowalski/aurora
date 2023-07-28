import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicButtonComponent } from './components/basic-button/basic-button.component';
import { SimpleButtonComponent } from './components/simple-button/simple-button.component';

@NgModule({
  exports: [BasicButtonComponent, SimpleButtonComponent],
  imports: [CommonModule],
  declarations: [BasicButtonComponent, SimpleButtonComponent],
})
export class AuButtonModule {}
