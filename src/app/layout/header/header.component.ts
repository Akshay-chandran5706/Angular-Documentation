import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, ROUTES } from '@angular/router';
import { PageIndexService } from '../../services/page-index.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [{ provide: ROUTES, useExisting: ROUTES }]
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter<void>();
  isDark = false;
  searchText = '';
  filteredResults: { title: string; snippet: string; route: string }[] = [];

  constructor(
    private router: Router,
    private eRef: ElementRef,
    private pageIndex: PageIndexService
  ) { }

  toggleSidebar() {
    this.toggle.emit();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('light-theme-deactivated', this.isDark);
  }

  onSearch() {
    const keyword = this.searchText.trim().toLowerCase();
    if (keyword.length < 2) {
      this.filteredResults = [];
      return;
    }

    this.filteredResults = this.pageIndex.search(keyword);
  }

  goTo(path: string) {
    this.router.navigateByUrl(path);
    this.searchText = '';
    this.filteredResults = [];
  }

  onBlur() {
    setTimeout(() => this.filteredResults = [], 150);
  }
}
