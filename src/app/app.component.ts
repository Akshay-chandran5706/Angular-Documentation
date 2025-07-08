import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Documentation';
  isSidebarCollapsed = false;
  showMobileSidebar = false;
  isMobile = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,

  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateScreenSize();
      window.addEventListener('resize', this.updateScreenSize.bind(this));
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.updateScreenSize();
  }

  updateScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 767;
    }
  }

  toggleSidebar() {
    if (this.isMobile) {
      this.showMobileSidebar = !this.showMobileSidebar;
    } else {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
  }

  closeSidebar() {
    this.showMobileSidebar = false;
  }
}