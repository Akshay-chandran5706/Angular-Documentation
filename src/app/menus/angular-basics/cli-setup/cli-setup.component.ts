import { Component, Input } from '@angular/core';
import { CodeBlockComponent } from "../../../components/codeblock/codeblock.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cli-setup',
  imports: [CommonModule, CodeBlockComponent],
  templateUrl: './cli-setup.component.html',
  styleUrl: './cli-setup.component.scss'
})
export class CliSetupComponent {

  step1: string = 'npm install - g @angular/cli';
  step2: string = 'ng new myNewApp';
  step3: string = 'ng serve';

}
