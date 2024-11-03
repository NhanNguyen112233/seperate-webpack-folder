import { Component } from '@angular/core';
import { AdminLoadingService, SnackbarService } from 'admin-core-web-libs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private snackbarService: SnackbarService,
    private loadingService: AdminLoadingService
  ) {}
}
