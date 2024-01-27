import { Component } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  selectedTab: string = 'home';

  constructor(private subscribeService: SubscribeService){}

  HomeClicked(){
    this.selectedTab = 'home';
  }

  AdminClicked(){
    this.selectedTab = 'admin';
  }

  onSubscribe(){
    // alert('Thank you for subscribing, you can access the services now..')
    this.subscribeService.onSubscribeClicked();
  }
}