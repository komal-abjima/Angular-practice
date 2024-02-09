import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Task } from '../Model/Task.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subscription, map } from 'rxjs';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy{
  showCreateTaskForm: boolean = false;
  allTasks: Task[] = [];
  showTaskDetails: boolean = false;

  editMode: boolean = false;
  selectedTask: Task;
  currentTaskId: string = '';
  isLoading: boolean = false;
  errorMessage: string | null = null;
  errorSub: Subscription;
  currentTask: Task | null = null;
  constructor(private http: HttpClient, private taskService: TaskService){}

  ngOnInit(): void {
    this.fetchAllTasks();
    this.errorSub = this.taskService.errorSubject.subscribe({next: (httpError) =>{
        this.setErrorMessage(httpError);
    }})
    // console.log(this.editMode)
  }

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
    this.editMode = false;
    this.selectedTask = {title: '', description: '', assignedTo: '', createdAt: '', priority: '', status: ''}
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  fetchAllTasksClicked(){
    this.fetchAllTasks();
  }
 
  

  // post api
  CreateOrUpdateTask(data: Task){
    // console.log(data);
    // const headers = new HttpHeaders({'my-header': 'hello'})
    // this.http.post<{name: string}>
    // ('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/tasks.json', 
    // data, {headers: headers})
    // .subscribe(responseData=>{
    //   console.log(responseData);
    //   this.fetchAllTasks();
    // })
  
    if(!this.editMode){
      // console.log(this.editMode);
      this.taskService.CreateTask(data);
  }
    else{
      this.taskService.UpdateTask(this.currentTaskId, data);
    }

  }

  // get api
  private fetchAllTasks(){
    // this.http.get<{[key: string]: Task}>('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/tasks.json')
    // .pipe(map((response) =>{
    //   let tasks = [];

    //   for(let key in response){
    //     if(response.hasOwnProperty(key)){
    //       tasks.push({...response[key], id: key})
    //     }

    //   }
    //   return tasks;
    // }))
    // .subscribe((tasks)=>{
    //   this.allTasks = tasks;
    //   // console.log(tasks);
    // })
    this.isLoading = true;
    this.taskService.GetAllTasks().subscribe({next: (tasks)=>{
      this.allTasks = tasks;
      this.isLoading = false;
    }, error: (error) =>{
      // this.errorMessage = error.message;
      this.setErrorMessage(error);
      this.isLoading = false
      setTimeout(() => {
        this.errorMessage = null;
      }, 3000);

    }})
  }

  private setErrorMessage(err: HttpErrorResponse){
    console.log(err)
    if(err.error.error === 'Permission denied'){
      this.errorMessage = 'You do not have permission to perform this action'
    }
    else{
      this.errorMessage = err.message;
    }

  }

  // delete by id
  deleteTask(id: string ){
    // this.http.delete('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/tasks/' +id+'.json')
    // .subscribe((res)=>{
    //   // console.log(res);
    //   this.fetchAllTasks();
    // })
    this.taskService.deleteTask(id);
  }

  // delete all the tasks
  deleteAllTasks(){
    // this.http.delete('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/tasks.json')
    // .subscribe((res)=>{
    //   // console.log(res);
    //   this.fetchAllTasks();
    // })
    this.taskService.deleteAllTasks();
  }

  showCurrentTaskDetails(id: string | undefined){
    this.showTaskDetails = true
    this.taskService.getTaskDetails(id).subscribe({
      next:(data: Task) =>{
        this.currentTask = data
      }
    })
  }

  closeTaskDetails(){
    this.showTaskDetails = false
  }

  onEditClicked(id: string | undefined){
    this.currentTaskId = id;
    this.showCreateTaskForm = true;
    this.editMode = true;


    this.selectedTask = this.allTasks.find((task)=>{return task.id === id})

  }
 
  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

}