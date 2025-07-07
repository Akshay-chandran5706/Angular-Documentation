import { Component } from '@angular/core';

@Component({
  selector: 'app-cli-setup',
  imports: [],
  templateUrl: './cli-setup.component.html',
  styleUrl: './cli-setup.component.scss'
})
export class CliSetupComponent {
  copyCode() {
    const code = document.getElementById('codeContent')?.textContent || '';
    navigator.clipboard.writeText(code).then(() => {
      alert('Copied to clipboard!');
    });
  }

}
