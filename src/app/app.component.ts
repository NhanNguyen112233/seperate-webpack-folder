import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AdminCommunicateService, AdminEvent } from 'admin-core-web-libs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'host-app';
  loadContent = '';

  constructor(
    @Inject(AdminCommunicateService)
    private adminCommunicateService: AdminCommunicateService,
    private router: Router
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
    this.adminCommunicateService.getEvent().subscribe((data: AdminEvent) => {
      console.log('data', data);

      this.loadContent = data.data;
    });
  }
}
