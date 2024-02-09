import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Task } from "../Model/Task.model";
import { Subject, catchError, map, throwError } from "rxjs";
import { LoggingService } from "./logging.service";

@Injectable({
    providedIn: 'root'
})
export class TaskService{
  errorSubject = new Subject<HttpErrorResponse>();
    constructor(private http: HttpClient, private loggingService: LoggingService){}

    CreateTask(task: Task){
            // console.log(data);
    const headers = new HttpHeaders({'my-header': 'hello'})
    this.http.post<{name: string}>
    ('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/tasks.json', 
    task, {headers: headers})
    .pipe(catchError((err)=>{

      const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()}
      this.loggingService.logError(errorObj)
      return throwError(()=>err);
    }))
    .subscribe({error: (err)=>{
      this.errorSubject.next(err);
    }})
  
    }

    deleteTask(id: string | undefined){
        this.http.delete('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/tasks/' +id+'.json')
        .pipe(catchError((err)=>{

          const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()}
          this.loggingService.logError(errorObj)
          return throwError(()=>err);
        }))
    .subscribe({error: (err)=>{
      this.errorSubject.next(err);
    }})
    }

    deleteAllTasks(){
        this.http.delete('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/tasks.json')
        .pipe(catchError((err)=>{

          const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()}
          this.loggingService.logError(errorObj)
          return throwError(()=>err);
        }))
        .pipe(catchError((err)=>{

          const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()}
          this.loggingService.logError(errorObj)
          return throwError(()=>err);
        }))
        .subscribe({error: (err)=>{
          this.errorSubject.next(err);
        }})
    }

    GetAllTasks(){
      let headers = new HttpHeaders();
      headers = headers.append('content-type', 'application/json')
      headers = headers.append('content-type', 'text/html')

      let queryParams = new HttpParams();
      queryParams = queryParams.set('page', 2);
      queryParams = queryParams.set('item', 10)
        return this.http.get<{[key: string]: Task}>('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/tasks.json?page=2&item=10',
        {headers: headers, params: queryParams})
            .pipe(map((response) =>{
             let tasks = [];

      for(let key in response){
        if(response.hasOwnProperty(key)){
          tasks.push({...response[key], id: key})
        }

      }
      return tasks;
    }), catchError((err)=>{

      const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()}
      this.loggingService.logError(errorObj)
      return throwError(()=>err);
    }))
   
    }

    UpdateTask(id: string | undefined, data: Task){
      this.http.put('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/tasks/' +id+ '.json', data)
      .pipe(catchError((err)=>{

        const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()}
        this.loggingService.logError(errorObj)
        return throwError(()=>err);
      }))
      .subscribe({error: (err)=>{
        this.errorSubject.next(err);
      }})

    }

    getTaskDetails(id: string | undefined){
      return this.http.get('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/tasks/' +id+ '.json')
      .pipe(map((response)=>{
        console.log(response)
        let task = {};
        task = {...response, id: id}
        return task;
      }))
   
    }

}