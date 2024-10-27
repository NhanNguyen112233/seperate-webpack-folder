import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  AdminCoreWebLibModule,
  ButtonComponent,
  CheckboxComponent,
  DatePickerComponent,
  InputComponent,
  SelectComponent,
} from 'admin-core-web-libs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { enviroment } from '@config/enviroment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    AdminCoreWebLibModule.forRoot(enviroment),
    ButtonComponent,
    SelectComponent,
    DatePickerComponent,
    CheckboxComponent,

    InputComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
