import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError, tap, every } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { Post } from '../model/post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://angularhttp-ce0f8-default-rtdb.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response'
        }
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(
        'https://angularhttp-ce0f8-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({'Custom-Headers' : 'Hello'}),
          params: searchParams,
          responseType: 'json'
        }
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      'https://angularhttp-ce0f8-default-rtdb.firebaseio.com/posts.json',
      {
        observe: 'events'
      })
      .pipe(
        tap(event =>{
          console.log(event);
          if(event.type === HttpEventType.Sent){
            //cannot use here body
          }
          if(event.type === HttpEventType.Response){
          console.log(event.body)
          }
        })
      )
  }

  deletePostbyID(id:string){
    this.http.delete('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/posts/' +id+'.json').subscribe(()=>{})
  }
}
