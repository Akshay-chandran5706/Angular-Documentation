import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PageIndexService {
  private pageContent = new Map<string, string>();
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.loadFromStorage();
    }
  }

  setContent(route: string, content: string) {
    this.pageContent.set(route, content.toLowerCase());
    if (this.isBrowser) {
      this.saveToStorage();
    }
  }

  search(keyword: string): { route: string; snippet: string; title: string }[] {
    const results: { route: string; snippet: string; title: string }[] = [];
    const lowerKeyword = keyword.toLowerCase();

    this.pageContent.forEach((content, route) => {
      const words = content.split(/\s+/);
      const keywordIndex = words.findIndex(w => w.includes(lowerKeyword));
      if (keywordIndex === -1) return;

      const start = Math.max(0, keywordIndex - 3);
      const end = Math.min(words.length, keywordIndex + 4);

      let snippet = words.slice(start, end).join(' ');
      const regex = new RegExp(`(${lowerKeyword})`, 'gi');
      snippet = snippet.replace(regex, '<mark>$1</mark>');

      const title = route
        .split('/')
        .filter(Boolean)
        .map(this.capitalize)
        .join(' › ') || 'Home';

      results.push({ route, snippet: snippet.trim(), title });
    });

    return results;
  }

  clearIndex() {
    this.pageContent.clear();
    if (this.isBrowser) {
      localStorage.removeItem('pageIndex');
    }
  }

  private saveToStorage() {
    const obj = Object.fromEntries(this.pageContent);
    localStorage.setItem('pageIndex', JSON.stringify(obj));
  }

  private loadFromStorage() {
    const stored = localStorage.getItem('pageIndex');
    if (stored) {
      const parsed = JSON.parse(stored);
      for (const key in parsed) {
        this.pageContent.set(key, parsed[key]);
      }
    }
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
