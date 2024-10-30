import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
export interface MenuItem {
  label: string;
  icon?: string;
  link?: string;
  children?: MenuItem[];
  collapsed?: boolean;
}
@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [RouterModule, CommonModule, MatIconModule],
  providers: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  @Input() items!: MenuItem[];
  @Input() activeUrl!: string;
  @Input() level: number = 0;
  @ViewChild('icon', { static: true }) icon!: ElementRef;

  isActive(item: MenuItem): boolean {
    if (item.link && this.activeUrl === item.link) {
      return true;
    }
    if (item.children) {
      return item.children.some((child) => this.isActive(child));
    }
    return false;
  }

  toggleCollapse(item: MenuItem): void {
    item.collapsed = !item.collapsed;
  }

  genIcon(item: MenuItem): string {
    return `admin-${item.icon}`;
  }

  getIconClass(item: MenuItem): string {
    return this.isActive(item) ? 'icon-active' : 'icon-not-active';
  }
}
