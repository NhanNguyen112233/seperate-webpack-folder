import { Component, Input } from '@angular/core';
import { AdminMenuComponent } from '../menu/menu.component';
import { MenuItem } from '../menu/menu-item/menu-item.component';

@Component({
  selector: 'admin-main-layout',
  standalone: true,
  imports: [AdminMenuComponent],
  templateUrl: './admin-main-layout.component.html',
  styleUrl: './admin-main-layout.component.scss',
})
export class AdminMainLayoutComponent {
  @Input() menuItems: MenuItem[] = [
    {
      label: 'Trang chủ',
      icon: 'tpb',
      link: '/home',
    },
    {
      label: 'Quản lý sản phẩm',
      icon: 'product',
      children: [
        {
          label: 'Danh mục',
          link: '/products/electronics/mobile-phones',
        },
        {
          label: 'Sản phẩm',
          children: [
            {
              label: 'Card',
              link: '/products/clothing/men',
            },
          ],
        },
      ],
    },
    {
      label: 'Quản lý phí',
      icon: 'fee',
      link: '/fee',
    },
    {
      label: 'Quản lý lãi',
      icon: 'tpb',
      link: '/tpb',
    },
    {
      label: 'Quản lý phân khúc KH',
      icon: 'cutomer-group',
      link: '/cutomer-group',
    },
    {
      label: 'Cấu hình kết nối',
      icon: 'connect',
      link: '/connect',
    },
    {
      label: 'Cấu hình khác',
      icon: 'config',
      link: '/config',
    },
    {
      label: 'Phê duyệt tập trung',
      icon: 'mark',
      link: '/approve',
    },
  ];
}
