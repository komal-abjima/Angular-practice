import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {

  ngOnInit(): void {
    // unicast
    // let obs = new Observable((observer)=>{observer.next(Math.random())})
    
  //   // multicast
    // const subject = new Subject();

    // ReplaySubject
    // const subject = new ReplaySubject();
    // const subject = new ReplaySubject(2);

    //here 100 is an initial value
    // const subject = new BehaviorSubject<number>(100);


    // subject.next(100);
    // subject.next(200);
    // subject.next(300);

    // subscriber 1
    // obs.subscribe((data)=>{console.log(data)})
  //  subject.subscribe((data)=>{console.log("Subscriber 1: " + data)})
    
    // subscriber 2
    // obs.subscribe((data)=>{console.log(data)})
  //  subject.subscribe((data)=>{console.log("Subscriber 2: "+ data)})

  //  subject.next(Math.random());
  // subject.next(2020);

  // subscriber 3
  // subject.subscribe((data)=>{console.log("Subscriber 3: " + data)})

  // subject.next(2024);


  // calling ajax
  // const subject = new Subject();
  // const data = ajax('https://randomuser.me/api/');

  // data.subscribe((res)=>console.log(res));
  // data.subscribe((res)=>console.log(res));
  // data.subscribe((res)=>console.log(res));

  // multicast
  // subject.subscribe((res)=>console.log(res));
  // subject.subscribe((res)=>console.log(res));
  // subject.subscribe((res)=>console.log(res));

  // data.subscribe(subject);


  // async subject
  // const asyncSubject = new AsyncSubject();

  //   asyncSubject.next(100);
  //   asyncSubject.next(200);
  //   asyncSubject.next(300);
    // it dosent work without complete
    // asyncSubject.complete();

    // asyncSubject.subscribe(data=>console.log(`Subscriber 1: ${data}`));

    // asyncSubject.complete();
    // asyncSubject.next(400);
    // asyncSubject.complete();

    // asyncSubject.subscribe(data=>console.log(`Subscriber 2: ${data}`));


    // Promise v/s Observables

    // promise
    const promise = new Promise((resolve, reject)=>{
      console.log('Promise is called')
      resolve(100);
      resolve(200);
      resolve(300);
    })

    // it only emit single value
    promise.then((data)=>{
      console.log(`Promise value: ${data}`);
    })

    // observable
    const obs = new Observable((sub)=>{
      console.log('Observable is called');
      sub.next(100);
      sub.next(200);
      sub.next(300);
    })
    // it emit multiple value
    obs.subscribe(data =>{console.log(`Observable value: ${data}`)});



    

  }






}
