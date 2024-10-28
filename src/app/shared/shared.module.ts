import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormWrapperComponent } from './components/form-wrapper/form-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';

const SHARED_COMPONENTS = [FormWrapperComponent];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...SHARED_COMPONENTS, ReactiveFormsModule],
  exports: [...SHARED_COMPONENTS, ReactiveFormsModule, CommonModule],
})
export class SharedModule {}
