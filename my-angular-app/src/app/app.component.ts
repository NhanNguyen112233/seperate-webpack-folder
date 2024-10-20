import { Component, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminFormFieldWrapper } from './shared/ui/admin-form-field/admin-form-field.component';
import { A } from '@angular/cdk/keycodes';
import { InputComponent } from './shared/ui/input/input.component';
import { DatePickerComponent } from './shared/ui/date-picker/date-picker.component';
import { SharedModule } from './shared/module/shared.module';
import { SearchSelectComponent } from './shared/ui/search-select/search-select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SearchSelectComponent,ReactiveFormsModule,InputComponent,DatePickerComponent], 
  providers:[{
    provide:MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue:{appearance:'outline'}
  }],
  encapsulation:ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';
  formGroup!: FormGroup;
  constructor(private fb:FormBuilder) {
    this.formGroup=this.fb.group({textInput:['ss',[Validators.required]],

      dateInput:[new Date(),[Validators.required]],
    });
  }

  onSubmit(){}
}
