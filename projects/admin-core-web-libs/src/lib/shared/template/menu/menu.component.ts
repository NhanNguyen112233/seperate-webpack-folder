import { Component, OnInit } from '@angular/core';
import { MenuItem, MenuItemComponent } from './menu-item/menu-item.component';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-menu',
  standalone: true,
  imports: [MenuItemComponent, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  searchQuery: string = '';
  filteredMenuItems: MenuItem[] = [];
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      link: '/home',
    },
    {
      label: 'Products',
      icon: 'shopping_cart',
      children: [
        {
          label: 'Electronics',
          children: [
            {
              label: 'Mobile Phones',
              link: '/products/electronics/mobile-phones',
            },
            {
              label: 'Laptops',
              children: [
                {
                  label: 'Gaming Laptops',
                  link: '/products/electronics/laptops/gaming',
                },
                {
                  label: 'Business Laptops',
                  link: '/products/electronics/laptops/business',
                },
              ],
            },
          ],
        },
        {
          label: 'Clothing',
          children: [
            {
              label: 'Men',
              link: '/products/clothing/men',
            },
            {
              label: 'Women',
              children: [
                {
                  label: 'Dresses',
                  link: '/products/clothing/women/dresses',
                },
                {
                  label: 'Shoes',
                  link: '/products/clothing/women/shoes',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'About',
      icon: 'info',
      link: '/about',
    },
  ];

  activeUrl!: string;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeUrl = event.urlAfterRedirects;
      }
    });
  }

  ngOnInit(): void {
    this.activeUrl = this.router.url;
    console.log('router', this.router);

    console.log('activeUrl', this.activeUrl);
  }

  filterMenu(): void {
    if (!this.searchQuery) {
      this.filteredMenuItems = this.menuItems;
    } else {
      this.filteredMenuItems = this.filterItems(
        this.menuItems,
        this.searchQuery.toLowerCase()
      );
    }
  }

  filterItems(items: MenuItem[], query: string): MenuItem[] {
    return items
      .map((item) => {
        const isMatch = item.label.toLowerCase().includes(query);
        const children = item.children
          ? this.filterItems(item.children, query)
          : [];
        const isChildMatch = children.length > 0;

        return {
          ...item,
          collapsed: !(isMatch || isChildMatch),
          children: children,
        };
      })
      .filter(
        (item) =>
          item.label.toLowerCase().includes(query) ||
          (item.children && item.children.length > 0)
      );
  }

  isActive(item: MenuItem): boolean {
    if (item.link && this.activeUrl === item.link) {
      return true;
    }
    if (item.children) {
      return item.children.some((child) => this.isActive(child));
    }
    return false;
  }
}
