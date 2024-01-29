import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  data: any[] = [];

  @ViewChild('createBtn') createBtn: ElementRef;

  createBtnObs;

  array1 = [1,2,3,4,5];
  array2 = ['A', 'B', 'C', 'D', 'E'];

  // 1. create an observable

  // myObservable = new Observable((observer) =>{
  //   // observer.next([1,2,3,4,5]);
  //   // observer.next(1);
  //   // observer.next(2);
  //   // observer.next(3);
  //   // observer.next(4);
  //   // observer.next(5);
  //   setTimeout(() => {observer.next(1)}, 1000);
  //   setTimeout(() => {observer.next(2)}, 2000);
  //   setTimeout(() => {observer.next(3)}, 3000);
  //   // setTimeout(() => {observer.error(new Error('Something went wrong'))}, 3000);
  //   setTimeout(() => {observer.next(4)}, 4000);
  //   setTimeout(() => {observer.next(5)}, 5000);
  //   setTimeout(() => {observer.complete()}, 6000);
  // })

  // by using of()
  // myObservable = of(this.array1, this.array2, 20,30, 'Hello', true);
  
  // by using from()
  // myObservable = from(this.array1);
  // myObservable = from('2345678');

  promiseData = new Promise((resolve, reject)=>{
    resolve([10,20,30,40]);
  })
  myObservable = from(this.promiseData);

  GetData(){
    // observer
    // next, error, complete

    // this.myObservable.subscribe((val: any)=>{
    //   // handler
    //   // when data is in one array
    //   // this.data = val

    //   // when data is in stream of data
    //   this.data.push(val); 
    // },
    // (err) =>{
    //   alert(err.message);
    // },
    // () =>{
    //   alert('All the data is streamed..')
    //  console.log('completed');
    // })

    // the above is showing depracted so we will use this
    this.myObservable.subscribe({
      next: (val: any) => {this.data.push(val);
      console.log(val)},
      error (err){  alert(err.message);},
      complete() {alert('All the data is streamed..')}
    })
    
  }

  buttonClicked(){
    let count = 0;
    this.createBtnObs = fromEvent(this.createBtn.nativeElement, 'click')
                        .subscribe((data)=>{
                          console.log(data);
                          this.showItem(++count);
                        })
    
  }

  ngAfterViewInit(){
    this.buttonClicked();
  }

  showItem(val){
    let div = document.createElement('div');
    div.innerText = 'Item' + val;
    div.className = 'data-list';
    document.getElementById('divstyle').appendChild(div);

  }
}
