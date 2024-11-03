import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminMainLayoutComponent } from 'admin-core-web-libs';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [AdminMainLayoutComponent, RouterModule, HeaderComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent {
  menuItems = [
    {
      label: 'Trang chủ',
      icon: 'tpb',
      link: '/admin/home',
    },
    // {
    //   label: 'Micro app được nhúng từ app con',
    //   icon: 'tpb',
    //   link: '/mfe2',
    // },
    {
      label: 'Mfe nhúng từ app con',
      icon: 'product',
      children: [
        {
          label: 'Routing app con 1',
          link: '/mfe2/mfe-component/first-child',
        },
        {
          label: 'Routing app con 2',
          link: '/mfe2/mfe-component/second-child',
        },
        // {
        //   label: 'Routing app con 2',
        //   children: [
        //     {
        //       label: 'Card',
        //       link: '/products/clothing/men',
        //     },
        //   ],
        // },
      ],
    },
  ];
}
