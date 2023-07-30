import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuToastModule } from 'libs/ui/src/lib/toast/toast.module';
import { AuModalModule } from '../../../../libs/ui/src/lib/modal/modal.module';

@Component({
  standalone: true,
  imports: [RouterModule, AuToastModule, AuModalModule],
  selector: 'au-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Aurora App';
}
