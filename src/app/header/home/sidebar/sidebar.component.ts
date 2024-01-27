import { Component } from '@angular/core';
import { SubscribeService } from '../../../services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private subscribeService: SubscribeService){}

  onSubscribe(){
    // alert('Thank you for subscribing, you can access the services now..')
    this.subscribeService.onSubscribeClicked();
  }

}
