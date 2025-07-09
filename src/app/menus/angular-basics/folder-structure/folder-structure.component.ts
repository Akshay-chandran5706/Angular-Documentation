import { Component } from '@angular/core';
import { CodeBlockComponent } from "../../../components/codeblock/codeblock.component";

@Component({
  selector: 'app-folder-structure',
  imports: [CodeBlockComponent],
  templateUrl: './folder-structure.component.html',
  styleUrl: './folder-structure.component.scss'
})
export class FolderStructureComponent {
  step1: any = ''
}
