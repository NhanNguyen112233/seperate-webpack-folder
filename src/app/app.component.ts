import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AdminCommunicateService, AdminEvent} from 'admin-core-web-libs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'host-app';
  loadContent=''
  
  constructor(@Inject(AdminCommunicateService) private adminCommunicateService: AdminCommunicateService) {}

  ngOnInit(){
    this.viewEventService()
  }
  loadEventService (){
    // this.adminCommunicateService.emmitEvent({event:'test',data:'test data'})
  }

  viewEventService (){
     this.adminCommunicateService.getEvent().subscribe((data:AdminEvent)=>{
      console.log('data',data);
      
      this.loadContent=data.data
     })
  }
}
