import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { IAdminConfimModal } from './confirm-modal.i';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-confirm-modal',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss',
})
export class AdminConfirmModalComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<AdminConfirmModalComponent>);
  readonly dialogData = inject<IAdminConfimModal>(MAT_DIALOG_DATA);
  modalData: IAdminConfimModal = {
    title: '',
    description: '',
    confirmText: '',
    cancelText: '',
  };

  ngOnInit(): void {
    this.modalData = {
      title: this?.dialogData?.title || '',
      description: this?.dialogData?.description || '',
      confirmText: this?.dialogData?.confirmText || '',
      cancelText: this?.dialogData?.cancelText || 'Đóng',
    };
  }
  handleConfirm(): void {
    this.dialogRef.close(this.dialogData);
  }

  handleCancel(): void {
    this.dialogRef.close();
  }
}
