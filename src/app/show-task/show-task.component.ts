import { Component, OnInit } from '@angular/core';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent implements OnInit {
  tasks: string[] = ['task1', 'task2', 'task3']

  constructor(private taskService: TaskService){}


  ngOnInit(): void {

    this.taskService.CreateTask.subscribe((value)=>{
      this.tasks.push(value);
    })
    
  }



}
