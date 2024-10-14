import { Component, Inject, OnInit } from '@angular/core';
import {AdminCommunicateService} from 'admin-core-web-libs'

@Component({
  selector: 'app-mfe-component',
  templateUrl: './mfe-component.component.html',
  styleUrl: './mfe-component.component.scss',
})
export class MfeComponentComponent implements OnInit {

  constructor(@Inject(AdminCommunicateService) private adminCommunicateService: AdminCommunicateService) {}

  ngOnInit(): void {
    // console.log(
    //   'MFE component initializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitializedinitialized'
    // );
  }

  submitFromMicroApp(){
    this.adminCommunicateService.emmitEvent({event:'test',data:'test d555ata'})
  }
}
