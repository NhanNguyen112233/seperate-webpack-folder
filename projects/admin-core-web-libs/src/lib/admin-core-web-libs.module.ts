import { DatePickerComponent } from './lib/shared/components/date-picker/date-picker.component';
import { SelectComponent } from 'projects/admin-core-web-libs/src/lib/shared/components/select/select.component';
import { InputComponent } from './lib/shared/components/input/input.component';
import { ButtonComponent } from './lib/shared/components/button/button.component';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    ButtonComponent,
    InputComponent,
    SelectComponent,
    DatePickerComponent,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    SelectComponent,
    DatePickerComponent,
  ],
})
export class AdminCoreWebLibModule {
  public static forRoot(
    environment: any
  ): ModuleWithProviders<AdminCoreWebLibModule> {
    return {
      ngModule: AdminCoreWebLibModule,
      providers: [
        {
          provide: 'env', // you can also use InjectionToken
          useValue: environment,
        },
      ],
    };
  }
}
