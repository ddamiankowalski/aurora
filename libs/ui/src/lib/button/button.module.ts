import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicButtonComponent } from './components/basic-button/basic-button.component';
import { SimpleButtonComponent } from './components/simple-button/simple-button.component';
import { OutlineButtonComponent } from './components/outline-button/outline-button.component';

@NgModule({
  exports: [
    BasicButtonComponent,
    SimpleButtonComponent,
    OutlineButtonComponent,
  ],
  imports: [CommonModule],
  declarations: [
    BasicButtonComponent,
    SimpleButtonComponent,
    OutlineButtonComponent,
  ],
})
export class AuButtonModule {}
