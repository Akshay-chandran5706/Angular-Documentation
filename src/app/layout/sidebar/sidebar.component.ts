import { CommonModule } from '@angular/common';
import { SIDEBAR_MENU } from './sidebar-menu';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menus = SIDEBAR_MENU;
  @Input() isCollapsed = false;

  openMenus: { [key: string]: boolean } = {};

  toggleMenu(key: string): void {
    this.openMenus[key] = !this.openMenus[key];
  }
}
