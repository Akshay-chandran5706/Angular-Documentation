import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TableComponent {
  @Input() headers: string[] = [];
  @Input() columns: string[] = [];
  @Input() data: any[] = [];

  @Input() showActions: boolean = false;

  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @ContentChild('command', { static: false }) commandTemplate!: TemplateRef<any>;

  onEdit(row: any) {
    this.edit.emit(row);
  }

  onDelete(row: any) {
    this.delete.emit(row);
  }
}
