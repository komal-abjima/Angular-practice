import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../model/post.model";
import { Subject, catchError, map, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PostService{
    error = new Subject<string>();

    constructor(private http: HttpClient){}

    onCreatePost(title: string, content: string){
        const postData: Post = {title: title, content: content}
        this.http.post<{name: string}>('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/posts.json', postData)
        .subscribe(responseData=>{
          console.log(responseData);
        },
        error =>{
            this.error.next(error.message)
        })
    }

    fetchPosts(){
    return this.http.get<{[key: string]: Post}>('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/posts.json')
    .pipe(map(responseData =>{
      const postArray: Post[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postArray.push({...responseData[key], id: key})
        }
      }
      return postArray;

    }),
    catchError(errorRes =>{
        return throwError(errorRes);
    })
    )
  
    }

    deleteallPosts(){
        this.http.delete('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/posts.json').subscribe((res)=>{
            console.log(res);
        })
    }

    deletePostById(id: string | undefined){
        this.http.delete('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/posts/' +id+ '.json')
        .subscribe((res)=>{})
    }



}