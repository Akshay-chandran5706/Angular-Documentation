import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PageIndexService } from '../../services/page-index.service';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(
    private elRef: ElementRef,
    private pageIndex: PageIndexService,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    const contentEl = this.elRef.nativeElement.querySelector('.content');
    const content = contentEl?.innerText.trim() || '';

    this.pageIndex.setContent(this.router.url, content);
  }

  goToAngularBasic() {
    this.router.navigate(['/angular-basics/cli']);
  }
}
