import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogConfig,
} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AdminConfirmModalComponent } from '../components/modal/confirm-modal/confirm-modal.component';
import { IAdminConfimModal } from '../components/modal/confirm-modal/confirm-modal.i';

@Injectable({
  providedIn: 'root',
})
export class AdminModalService {
  constructor(private matDialog: MatDialog) {}

  open<T, D = any, R = any>(
    component: ComponentType<T>,
    config?: MatDialogConfig<D>
  ): MatDialogRef<T, R> {
    return this.matDialog.open(component, config);
  }

  closeAll(): void {
    this.matDialog.closeAll();
  }

  getDialogById(id: string): MatDialogRef<any> | undefined {
    return this.matDialog.getDialogById(id);
  }

  afterAllClosed(): Observable<void> {
    return this.matDialog.afterAllClosed;
  }

  afterOpened(): Observable<MatDialogRef<any>> {
    return this.matDialog.afterOpened;
  }

  openConfirmModal<R = any>(
    config?: MatDialogConfig<IAdminConfimModal>
  ): MatDialogRef<AdminConfirmModalComponent, R> {
    return this.matDialog.open(AdminConfirmModalComponent, {
      minWidth: 452,
      ...config,
    });
  }
}
