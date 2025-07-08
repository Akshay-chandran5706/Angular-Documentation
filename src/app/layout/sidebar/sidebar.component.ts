import { CommonModule } from '@angular/common';
import { SIDEBAR_MENU } from './sidebar-menu';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent implements OnInit {
  menus = SIDEBAR_MENU;
  @Input() isCollapsed = false;

  openMenus: { [key: string]: boolean } = {};

  ngOnInit() {
    this.menus.forEach(menu => {
      this.openMenus[menu.key] = false;
    });
  }

  toggleMenu(key: string): void {
    const isCurrentlyOpen = this.openMenus[key];

    Object.keys(this.openMenus).forEach(menuKey => {
      this.openMenus[menuKey] = false;
    });

    if (!isCurrentlyOpen) {
      this.openMenus[key] = true;
    }
  }
}
