import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoggingService{
    constructor(private http: HttpClient){}
    logError(data: {statusCode:number, errorMessage: string, datetime: Date}){
        this.http.post('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/log.json', data)
        .subscribe()
    }

    fetchErrors(){
        this.http.get('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/log.json').subscribe((data)=>{
            console.log(data)
        })

    }
}