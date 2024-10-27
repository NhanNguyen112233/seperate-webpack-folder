import {
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { SelectComponent } from './shared/components/select/select.component';
import { InputComponent } from './shared/components/input/input.component';
import { DatePickerComponent } from './shared/components/date-picker/date-picker.component';
import { CheckboxComponent } from './shared/components/checkbox/checkbox.component';
import { ButtonComponent } from './shared/components/button/button.component';
// admin-core-web-libs/admin-core-web-libs.module.ts
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminIconRegisterService } from './shared/services/admin-icon-register.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    ButtonComponent,
    CheckboxComponent,
    DatePickerComponent,
    InputComponent,
    SelectComponent,
  ],
  exports: [
    ButtonComponent,
    CheckboxComponent,
    DatePickerComponent,
    InputComponent,
    SelectComponent,
  ],
})
export class AdminCoreWebLibModule {
  static forRoot(environment: any): ModuleWithProviders<AdminCoreWebLibModule> {
    return {
      ngModule: AdminCoreWebLibModule,
      providers: [
        AdminIconRegisterService,

        // Add any services that need to be singleton here
      ],
    };
  }
}
