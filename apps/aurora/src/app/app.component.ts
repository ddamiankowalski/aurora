import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuToastModule } from 'libs/ui/src/lib/toast/toast.module';

@Component({
  standalone: true,
  imports: [RouterModule, AuToastModule],
  selector: 'au-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Aurora App';
}
