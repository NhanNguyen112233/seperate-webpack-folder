import { AdminLoadingService } from '../shared/services/admin-loading.service';
import { AdminWrapperComponent } from '../shared/template/admin-wrapper/admin-wrapper.component';
import { TextAreaComponent } from '../shared/components/text-area/text-area.component';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { SelectComponent } from '../shared/components/select/select.component';
import { InputComponent } from '../shared/components/input/input.component';
import { DatePickerComponent } from '../shared/components/date-picker/date-picker.component';
import { CheckboxComponent } from '../shared/components/checkbox/checkbox.component';
import { ButtonComponent } from '../shared/components/button/button.component';
// admin-core-web-libs/admin-core-web-libs.module.ts
import {
  NgModule,
  ModuleWithProviders,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminIconRegisterService } from '../shared/services/admin-icon-register.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminCoreWebLibsComponent } from '../admin-core-web-libs.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonComponent,
    CheckboxComponent,
    DatePickerComponent,
    InputComponent,
    SelectComponent,
    TextAreaComponent,
    AdminCoreWebLibsComponent,
    AdminWrapperComponent,
  ],
  exports: [
    ButtonComponent,
    CheckboxComponent,
    DatePickerComponent,
    InputComponent,
    SelectComponent,
    TextAreaComponent,
    AdminCoreWebLibsComponent,
    AdminWrapperComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AdminSharedModule {}
