import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../projects/admin-core-web-libs/src/public-api';
import { DatePickerComponent } from '../../projects/admin-core-web-libs/src/lib/shared/components/date-picker/date-picker.component';
import { InputComponent } from '../../projects/admin-core-web-libs/src/lib/shared/components/input/input.component';
import { CheckboxComponent } from '../../projects/admin-core-web-libs/src/lib/shared/components/checkbox/checkbox.component';
import { SelectComponent } from 'projects/admin-core-web-libs/src/lib/shared/components/select/select.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { AdminCoreWebLibModule } from 'dist/admin-core-web-libs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonComponent,
    CheckboxComponent,
    DatePickerComponent,
    InputComponent,
    ReactiveFormsModule,
    CheckboxComponent,
    SelectComponent,
    // AdminCoreWebLibModule.forRoot({}) // Moved to the application's main module or bootstrap
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'admin-core-web';
  form!:FormGroup
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({ 
      name:["",[Validators.required]],
    });
  }

  onSubmit(){
   this.form.controls['name'].markAsTouched();
   this.form.controls['name'].markAsDirty();
    if(this.form.valid){

      console.log(this.form.getRawValue());
    }
  }
}
