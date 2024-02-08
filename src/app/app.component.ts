import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Subscription, map } from 'rxjs';
import { Post } from './model/post.model';
import { PostService } from './Service/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;
  

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    // this.fetchPosts()
    this.errorSub = this.postService.error.subscribe((errorMessage)=>{
      this.error = errorMessage;
    })
    this.isFetching = true;
    this.postService.fetchPosts().subscribe((posts) =>{
      this.isFetching = false;
      this.loadedPosts = posts
    }, 
    error =>{
      this.isFetching = false;
      this.error = error.message;
    })

  }
  

  onFetchPosts() {
    // this.fetchPosts()
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts =>{
      this.isFetching = false;
      this.loadedPosts = posts

    }, error =>{
      this.isFetching =  false
      this.error = error.message;
      console.log(error)
    })
  }

  onClearPosts() {
    this.postService.deleteallPosts();

  }

  // post api
  // onCreatePost(postData: { title: string; content: string }) {
  onCreatePost(postData: Post) {    
    // console.log(postData);
    // this.http.post<{name: string}>('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/posts.json', postData).subscribe(responseData=>{
    //   console.log(responseData);
    // })
    this.postService.onCreatePost(postData.title, postData.content);

  }

  deletepost(id: string | undefined){
    this.postService.deletePostById(id);

  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe()
  }

  onHandleError(){
    this.error = null;
  }


  // get api
//   private fetchPosts(){
//   //   this.isFetching = true;
//   //   this.http.get<{[key: string]: Post}>('https://angularhttp-ce0f8-default-rtdb.firebaseio.com/posts.json')
//   //   .pipe(map(responseData =>{
//   //     const postArray: Post[] = [];
//   //     for(const key in responseData){
//   //       if(responseData.hasOwnProperty(key)){
//   //         postArray.push({...responseData[key], id: key})
//   //       }
//   //     }
//   //     return postArray;

//   //   }))
//   //   .subscribe(posts =>{
//   //     this.isFetching = false
//   //     this.loadedPosts = posts
//   //     // console.log(posts);
//   //   })
//   // }
// }
}
