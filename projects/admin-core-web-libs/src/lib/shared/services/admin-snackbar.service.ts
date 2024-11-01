import { inject, Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarConfig,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { AdminSnackbarComponent } from '../components/snackbar/snackbar.component';
import { ComponentType } from '@angular/cdk/portal';
export interface IAdminSnackbar {
  type: 'error' | 'info' | 'warning' | 'success';
  message: string;
}
@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  showError<D>(message: string, config?: MatSnackBarConfig<D>) {
    return this.createSnackbarFromComponent({
      ...config,
      horizontalPosition: config?.horizontalPosition || 'right',
      verticalPosition: config?.verticalPosition || 'top',
      panelClass: 'snackbar-error',
      data: { type: 'error', message },
    });
  }

  showInfo<D>(message: string, config?: MatSnackBarConfig<D>) {
    return this.createSnackbarFromComponent({
      ...config,
      data: { type: 'info', message },
      horizontalPosition: config?.horizontalPosition || 'right',
      verticalPosition: config?.verticalPosition || 'top',
      panelClass: 'snackbar-info',
    });
  }

  showWarning<D>(message: string, config?: MatSnackBarConfig<D>) {
    return this.createSnackbarFromComponent({
      ...config,
      horizontalPosition: config?.horizontalPosition || 'right',
      verticalPosition: config?.verticalPosition || 'top',
      panelClass: 'snackbar-warning',
      data: { type: 'warning', message },
    });
  }

  showSuccess<D>(message: string, config?: MatSnackBarConfig<D>) {
    return this.createSnackbarFromComponent({
      ...config,
      horizontalPosition: config?.horizontalPosition || 'right',
      verticalPosition: config?.verticalPosition || 'top',
      panelClass: 'snackbar-success',
      data: { type: 'success', message },
    });
  }

  showCustom<T, D extends IAdminSnackbar = any>(
    config?: MatSnackBarConfig<D>,
    component?: ComponentType<T>
  ): MatSnackBarRef<T> {
    return this.createSnackbarFromComponent<T, D>(config, component);
  }

  private createSnackbarFromComponent<T, D extends IAdminSnackbar = any>(
    config?: MatSnackBarConfig<D>,
    component?: ComponentType<T>
  ) {
    const Component = component || AdminSnackbarComponent;
    return this.snackBar.openFromComponent(Component as ComponentType<T>, {
      ...config,
      duration: 3000,
    });
  }
}
