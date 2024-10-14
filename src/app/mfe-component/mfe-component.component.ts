import { Component, Inject, OnInit } from '@angular/core';
import { AdminCommunicateService } from 'admin-core-web-libs';

@Component({
  selector: 'app-mfe-component',
  templateUrl: './mfe-component.component.html',
  styleUrl: './mfe-component.component.scss',
})
export class MfeComponentComponent implements OnInit {
  loadContent = '';
  constructor(
    @Inject(AdminCommunicateService)
    private adminCommunicateService: AdminCommunicateService
  ) {}

  ngOnInit(): void {
    // console.log(
    //   'MFE component initializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitialized'
    // );
    this.adminCommunicateService.getEvent().subscribe((data: any) => {
      console.log('data', data);
      this.loadContent = data.data;
    });
  }

  submitFromMicroApp() {
    this.adminCommunicateService.emmitEvent({
      event: 'test',
      data: 'data gửi từ app con',
    });
  }
}
