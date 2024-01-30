import { Component, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrl: './unsubscribe.component.css'
})
export class UnsubscribeComponent implements OnDestroy{
  // counter will emiting the data and subscriber will recieve the data
  counter = interval(1000);
  data: number[] = [];
  // unsubscribeData: Subscription;
  unsubscribeData;

  onSubscribe(){
   this.unsubscribeData =  this.counter.subscribe((val)=>{
      this.data.push(val);
    })
  }

  onUnSubscribe(){
    this.unsubscribeData.unsubscribe();
  }

  ngOnDestroy(): void {
    // this.unsubscribeData.unsubscribe();
    
  }
  // we can create a new subscriber 2 and subscriber 3 and for all of these we have to create a new data2 and data 3.

}
