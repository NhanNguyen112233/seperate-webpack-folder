import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'admin-form-field',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule],
  templateUrl: './admin-form-field.component.html',
  styleUrl: './admin-form-field.component.scss'
})
export class AdminFormFieldWrapper {

}
