import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toggleSidebar() {
    const layout = document.querySelector('.app-layout');
    layout?.classList.toggle('collapsed');
  }
}
