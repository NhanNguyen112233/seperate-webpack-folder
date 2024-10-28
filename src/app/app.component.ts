import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import {
  AdminCommunicateService,
  AdminEvent,
  AdminIconRegisterService,
} from 'admin-core-web-libs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'host-app';
  loadContent = '';
  form!: FormGroup;
  noReactive = {
    input: '',
  };
  onInputChange(e: any) {
    console.log('e', e);
  }
  constructor(
    @Inject(AdminCommunicateService)
    private adminCommunicateService: AdminCommunicateService,
    private router: Router,
    //remove
    private fb: FormBuilder
  ) {
    //remove
    this.form = this.fb.group({
      name: [
        { value: '', disabled: false },
        [Validators.required, Validators.maxLength(10)],
      ],
      des: ['', [Validators.required]],
      select: ['', [Validators.required]],
      date: [new Date(), []],
    });
  }

  ngOnInit() {
    this.viewEventService();

    this.router.navigateByUrl(location.pathname.slice(1));
    window.addEventListener('popstate', () => {
      this.router.navigateByUrl(location.pathname.slice(1));
    });
  }
  loadEventService() {
    this.adminCommunicateService.emmitEvent({
      event: 'test',
      data: 'data gửi từ app cha',
    });
  }

  viewEventService() {
    this.adminCommunicateService.getEvent().subscribe((data: AdminEvent) => {
      console.log('data', data);

      this.loadContent = data.data;
    });
  }

  onSubmit() {
    console.log('clicked');

    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log(this.form.getRawValue());
    }
  }

  handleError(formControlName: string) {
    switch (formControlName) {
      case 'name':
        if (this.form.get('name')?.hasError('required')) {
          return 'Name is required';
        } else if (this.form.get('name')?.hasError('maxlength')) {
          return 'Name should not exceed 10 characters';
        } else {
          return '';
        }
      default:
        return '';
    }
  }

  selectOption = [
    {
      label: 'Tất cả',
      value: 'ALL',
    },
    {
      label: 'Option 1',
      value: 1,
    },
    {
      label: 'Option 2',
      value: 2,
    },
    {
      label: 'Option 3',
      value: 3,
    },
  ];
}
