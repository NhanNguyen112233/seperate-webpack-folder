import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  AdminCoreWebLibModule,
  AdminModalService,
  AdminWrapperComponent,
  // AdminIconRegisterService,
  ButtonComponent,
  CheckboxComponent,
  DatePickerComponent,
  InputComponent,
  SelectComponent,
} from 'admin-core-web-libs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { enviroment } from '@config/enviroment';
import { zip } from 'rxjs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // AdminIconRegisterService,
    FormsModule,
    CommonModule,
    MatIconModule,
    AppRoutingModule,
    AdminCoreWebLibModule.forRoot(enviroment),
    ButtonComponent,
    SelectComponent,
    DatePickerComponent,
    CheckboxComponent,
    MatDialogModule,
    InputComponent,
    AdminWrapperComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
