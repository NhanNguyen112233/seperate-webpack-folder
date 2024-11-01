import { AdminWrapperComponent } from 'projects/admin-core-web-libs/src/lib/shared/template/admin-wrapper/admin-wrapper.component';
import { SnackbarService } from '../../../projects/admin-core-web-libs/src/lib/shared/services/admin-snackbar.service';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { AdminLoadingService } from 'projects/admin-core-web-libs/src/lib/shared/services/admin-loading.service';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [AdminWrapperComponent],
  providers: [SnackbarService, AdminLoadingService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent extends AdminWrapperComponent implements OnInit {
  snackbar = inject(SnackbarService);
  loadingService = inject(AdminLoadingService);
  showSnackbar(type: string) {
    const cf: any = {
      success: () => this.snackbar.showSuccess('success'),
      error: () => this.snackbar.showError('error'),
      info: () => this.snackbar.showInfo('info'),
      warning: () => this.snackbar.showWarning('warning'),
    };

    cf[type]() as any;
  }

  // ngOnInit(): void {
  //   this.load(true);
  // }
  load(state: boolean) {
    console.log('kiad');

    this.loadingService.show(state);
  }
}
