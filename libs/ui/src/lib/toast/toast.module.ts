import { NgModule } from '@angular/core';
import { ToastOutletComponent } from './components/toast-outlet/toast-outlet.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ToastOutletComponent],
  exports: [ToastOutletComponent],
  providers: [],
})
export class AuToastModule {}
