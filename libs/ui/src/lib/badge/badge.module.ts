import { NgModule } from '@angular/core';
import { NotificationBadgeComponent } from './components/notification-badge/notification-badge.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NotificationBadgeComponent],
  imports: [CommonModule],
  exports: [NotificationBadgeComponent],
})
export class AuBadgeModule {}
