import { Component, Input, OnInit } from '@angular/core';
import { MenuItem, MenuItemComponent } from './menu-item/menu-item.component';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { InputDirective } from '../../directive/input/input.directive';

@Component({
  selector: 'admin-menu',
  standalone: true,
  imports: [MenuItemComponent, FormsModule, MatIconModule, InputDirective],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class AdminMenuComponent implements OnInit {
  searchQuery: string = '';
  filteredMenuItems: MenuItem[] = [];

  @Input() menuItems: MenuItem[] = [];

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
    this.filteredMenuItems = this.menuItems;
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
