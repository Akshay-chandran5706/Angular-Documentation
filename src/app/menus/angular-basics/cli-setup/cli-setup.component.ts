import { Component } from '@angular/core';
import { CodeBlockComponent } from "../../../components/codeblock/codeblock.component";
import { CommonModule } from '@angular/common';
import { TableComponent } from "../../../components/tables/tables.component";

@Component({
  selector: 'app-cli-setup',
  imports: [CommonModule, CodeBlockComponent, TableComponent],
  templateUrl: './cli-setup.component.html',
  styleUrl: './cli-setup.component.scss'
})
export class CliSetupComponent {

  constructor() { }


  step1: string = 'npm install - g @angular/cli';
  step2: string = 'ng new myNewApp';
  step3: string = 'ng serve';

  cliCommands = {
    installCli: 'npm install -g @angular/cli',
    newProject: 'ng new myNewApp',
    serve: 'ng serve',
    generateComponent: 'ng generate component component-name / ng g c component-name',
    generateDirective: 'ng g directive directive-name',
    generateService: 'ng g service service-name',
    generatePipe: 'ng g pipe pipe-name',
    generateGuard: 'ng g guard guard-name',
    generateClass: 'ng g class class-name',
    serveCustomPort: 'ng serve --port 4300',
    build: 'ng build',
    buildProd: 'ng build --configuration=production',
    lazyModule: 'ng g component pages/component --route component'
  };

  cliData = [
    { use: 'Generate a new component', command: this.cliCommands.generateComponent },
    { use: 'Generate a directive', command: this.cliCommands.generateDirective },
    { use: 'Generate a service', command: this.cliCommands.generateService },
    { use: 'Generate a pipe', command: this.cliCommands.generatePipe },
    { use: 'Generate a route guard', command: this.cliCommands.generateGuard },
    { use: 'Generate a class', command: this.cliCommands.generateClass },
    { use: 'Run app on a custom port', command: this.cliCommands.serveCustomPort },
    { use: 'Build the project for production', command: this.cliCommands.build },
    { use: 'Optimized production build', command: this.cliCommands.buildProd },
    { use: 'Create lazy-loaded route component', command: this.cliCommands.lazyModule }
  ];

}
