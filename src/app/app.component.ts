import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../projects/admin-core-web-libs/src/public-api';
import { DatePickerComponent } from '../../projects/admin-core-web-libs/src/lib/shared/components/date-picker/date-picker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, DatePickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'admin-core-web';
}
