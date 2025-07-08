import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter<void>();
  isDark = false;
  searchText = '';

  toggleSidebar() {
    this.toggle.emit();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('light-theme-deactivated', this.isDark);
  }

  onSearch() {
    console.log('Searching:', this.searchText);
  }
}
