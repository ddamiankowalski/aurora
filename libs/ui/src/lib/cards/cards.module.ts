import { NgModule } from '@angular/core';
import { BasicCardComponent } from './components/basic-card/basic-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [BasicCardComponent],
  exports: [BasicCardComponent],
})
export class AuCardsModule {}
