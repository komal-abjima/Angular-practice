import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../Model/Task.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  taskForm: FormGroup;
  @Output() emitTaskData: EventEmitter<Task> = new EventEmitter<Task>();
  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'assignedTo': new FormControl(null, Validators.required),
      'createdAt': new FormControl(null, Validators.required),
      'priority': new FormControl(null, Validators.required),
      'status': new FormControl(null, Validators.required),

    });
  }

  onSubmit(){
    this.emitTaskData.emit(this.taskForm.value);
    console.log('form submitted');
    console.log(this.taskForm.value);
    this.CloseForm.emit(false)
  }


  OnCloseForm(){
    this.CloseForm.emit(false);
 
  }

}