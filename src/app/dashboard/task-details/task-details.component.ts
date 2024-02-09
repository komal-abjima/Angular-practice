import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Model/Task.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {
  @Output() closeDetailView: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() currentTask: Task | null = null;

  onClose(){
    this.closeDetailView.emit(false);
  }

}
