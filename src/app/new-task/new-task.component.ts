import { Component } from '@angular/core';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  newTask: string = '';

  constructor(private taskService: TaskService){}

  onNewTask(){
    console.log(this.newTask);
    this.taskService.onCreateTask(this.newTask);
  }

}
