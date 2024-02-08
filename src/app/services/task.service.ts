import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Task } from "../Model/Task.model";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TaskService{

    constructor(private http: HttpClient){}

    CreateTask(task: Task){
            // console.log(data);
    const headers = new HttpHeaders({'my-header': 'hello'})
    this.http.post<{name: string}>
    ('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/tasks.json', 
    task, {headers: headers})
    .subscribe(responseData=>{
      console.log(responseData);
  
    })
    }

    deleteTask(id: string | undefined){
        this.http.delete('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/tasks/' +id+'.json')
    .subscribe((res)=>{
      // console.log(res);
      
    })
    }

    deleteAllTasks(){
        this.http.delete('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/tasks.json')
        .subscribe((res)=>{
          // console.log(res);
       
        })
    }

    GetAllTasks(){
        return this.http.get<{[key: string]: Task}>('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/tasks.json')
            .pipe(map((response) =>{
             let tasks = [];

      for(let key in response){
        if(response.hasOwnProperty(key)){
          tasks.push({...response[key], id: key})
        }

      }
      return tasks;
    }))
   
    }

}