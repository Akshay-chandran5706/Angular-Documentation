import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockService } from './codeblock.service';


@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [CommonModule],
  providers: [CodeBlockService],
  template: `
    <div class="code-wrapper">
      <div class="toolbar">
        <span class="lang">{{ language || 'text' }}</span>
        <div class="actions">
          <button (click)="copyToClipboard()">
            {{ copied ? 'Copied!' : 'Copy' }}
          </button>
        </div>
      </div>
      <pre><code [innerText]="content ? content : 'Add content here'"></code></pre>
    </div>
  `,
  styles: [`
    .code-wrapper {
      background-color: var(--bg-color);
      color: #d4d4d4;
      border-radius: 8px;
      padding: 1rem;
      font-family: 'Fira Code', monospace;
      overflow-x: auto;
    }

    .toolbar {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.7rem;

      .lang {
        text-transform: uppercase;
        font-size: 0.75rem;
        color: #9ca3af;
      }

      .actions button {
        font-family: 'Fira Code', monospace;
        background: transparent;
        color: #93c5fd;
        border: none;
        cursor: pointer;
        margin-left: 10px;
        font-size: 0.85rem;
      }
    }

    pre {
      margin: 0;
    }
  `]
})
export class CodeBlockComponent {
  @Input() content = '';
  @Input() language = '';
  copied = false;

  constructor(private codeService: CodeBlockService) { }

  copyToClipboard() {
    this.codeService.copyText(this.content || 'Add content here');
    this.copied = true;

    setTimeout(() => {
      this.copied = false;
    }, 3000);
  }
}
