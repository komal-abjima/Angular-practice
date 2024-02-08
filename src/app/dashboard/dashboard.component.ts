import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../Model/Task.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  showCreateTaskForm: boolean = false;
  allTasks: Task[] = [];

  constructor(private http: HttpClient, private taskService: TaskService){}

  ngOnInit(): void {
    this.fetchAllTasks();
  }

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  fetchAllTasksClicked(){
    this.fetchAllTasks();
  }
 

  // post api
  CreateTask(data: Task){
    // console.log(data);
    // const headers = new HttpHeaders({'my-header': 'hello'})
    // this.http.post<{name: string}>
    // ('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/tasks.json', 
    // data, {headers: headers})
    // .subscribe(responseData=>{
    //   console.log(responseData);
    //   this.fetchAllTasks();
    // })
      this.taskService.CreateTask(data);

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
    this.taskService.GetAllTasks().subscribe((tasks)=>{
      this.allTasks = tasks;
    })
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
}