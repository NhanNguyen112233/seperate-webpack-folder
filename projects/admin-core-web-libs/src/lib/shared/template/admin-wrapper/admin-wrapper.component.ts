import { CommonModule } from '@angular/common';
import { AdminLoadingService } from './../../services/admin-loading.service';
import { Component, OnInit } from '@angular/core';
/**
 * This will carry some information of the app like appversion,etc..
 */
@Component({
  selector: 'admin-layout-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-wrapper.component.html',
  styleUrl: './admin-wrapper.component.scss',
})
export class AdminWrapperComponent implements OnInit {
  isLoading!: boolean;
  constructor(private adminLoadingService: AdminLoadingService) {}
  ngOnInit(): void {
    this.adminLoadingService.loading.subscribe((loading: boolean) => {
      this.isLoading = loading;
    });
  }
}
