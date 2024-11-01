import { Component, Inject, Input } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { IAdminSnackbar } from '../../services/admin-snackbar.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'admin-snackbar',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss',
})
export class AdminSnackbarComponent {
  data: IAdminSnackbar = { type: 'info', message: '' };
  constructor(
    @Inject(MAT_SNACK_BAR_DATA)
    data: IAdminSnackbar,
    private snackBarRef: MatSnackBarRef<AdminSnackbarComponent>
  ) {
    this.data = data;
  }

  parseAdminPrefix() {
    const adminPrefixObbj = {
      success: 'admin-success',
      error: 'admin-error',
      warning: 'admin-warning',
      info: 'admin-info',
    };

    return adminPrefixObbj[this.data.type];
  }

  parseContenttNoti(type: 'class' | 'title') {
    const contentObj = {
      success: {
        class: 'snackbar-title-success',
        title: 'Thành công!',
      },
      error: {
        class: 'snackbar-title-error',
        title: 'Thất bại!',
      },
      warning: {
        class: 'snackbar-title-warning',
        title: 'Cảnh báo!',
      },
      info: {
        class: 'snackbar-title-info',
        title: 'Thông báo!',
      },
    };

    if (type === 'class') {
      return contentObj[this.data.type].class;
    } else {
      return contentObj[this.data.type].title;
    }
  }

  closeSnackbar() {
    this.snackBarRef.dismiss();
  }
}
