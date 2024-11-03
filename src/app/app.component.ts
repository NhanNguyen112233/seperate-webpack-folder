import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import {
  AdminCommunicateService,
  AdminEvent,
  AdminIconRegisterService,
} from 'admin-core-web-libs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'host-app';

  constructor(
    @Inject(AdminCommunicateService)
    private adminCommunicateService: AdminCommunicateService,
    private adminIcon: AdminIconRegisterService,
    private router: Router //remove
  ) {}

  ngOnInit() {
    this.viewEventService();

    this.router.navigateByUrl(location.pathname.slice(1));
    window.addEventListener('popstate', () => {
      this.router.navigateByUrl(location.pathname.slice(1));
    });
  }
  loadEventService() {
    this.adminCommunicateService.emmitEvent({
      event: 'test',
      data: 'data gửi từ app cha',
    });
  }

  viewEventService() {
    this.adminCommunicateService.getEvent().subscribe((data: AdminEvent) => {});
  }
}
