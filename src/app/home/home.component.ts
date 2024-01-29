import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, count, filter, interval } from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {

  //  this.firstObsSubscription =  interval(1000).subscribe(count => {
  //     console.log(count);
  //   });

  // custom observable
 
  const customIntervalObservable = Observable.create(observer => {
    let count = 0;
    setInterval(()=>{
      // it takes 3 parameters next, complete and error
      observer.next(count);
      // error
      if(count > 3){
        observer.error(new Error('count is greater then 3'))
      }
      // .complete if this condition will  === 4 then the error will occur first
      if(count === 2){
        observer.complete();
      }
      count++;
    },1000)
  });

  // using operators
  //  customIntervalObservable.pipe(map((data: number)=>{
  //   return 'Round: '+ (data + 1);
  // }))

  this.firstObsSubscription = customIntervalObservable.pipe(
    // it is showing me an error
    filter(data => {return data > 2}), 
    map((data: number)=>{
    return 'Round: '+ (data + 1);
  })).subscribe(data => {
    console.log(data);
    // handle error here without using error in red
  }, error => {
    console.log(error);
    alert(error);
  }, 
  () =>{
    console.log('Completed!');
  });

  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
