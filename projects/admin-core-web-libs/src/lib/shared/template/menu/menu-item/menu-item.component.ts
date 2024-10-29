import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  imports: [RouterModule, CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  @Input() items!: MenuItem[];
  @Input() activeUrl!: string;

  isActive(item: MenuItem): boolean {
    console.log('this.activeUrl', this.activeUrl);

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
}
